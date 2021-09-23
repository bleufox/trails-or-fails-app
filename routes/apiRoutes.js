const express = require('express');
const User = require('../models/User');
const StarRatings = require('../models/starRatings')

const router = express.Router();

router.get('/users', async (req, res) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});

router.post('/users', async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
});

router.get('/users/sign-in/:username', async (req, res) => {
  const user = await User.findOne({ where: { username: req.params.username } });
  const validated = await user.validatePassword(req.body.password);
  console.log('validated variable is: ', validated);
  res.json(validated);
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    })
  } else {
    res.status(404).end();
  }
});

router.post('/rating', (req, res) => {
  //will need to pass in the user id, trail id and the rating
  StarRatings.create({
    userId: req.body.userId,
    trailId: req.body.trailId,
    rating: req.body.rating
  })
  .then(newRating => {
    res.status(200).send({message: 'Rating created successfully'});
    //do something on the frontend so that the user can't keep changing the stars
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  })
});

router.put('/rating/:ratingId', (req, res) => {
  //send a new put request with the rating id (which is the current rating id)
  //if a user already created a rating should have a unique id, and should be returned in the get request
  //making an assumption that the rating is being passed in the put request
  StarRatings.findOne({ where: { id: req.params.ratingId } })
  .then(foundRating => {
    if (!foundRating){
      res.status(404).send({message: 'Rating Id Not Found'});
      return;
    }
    foundRating.update({
      rating: req.body.rating
    })
    .then(() => {
      res.status(200).send({message: 'Rating updated successfully'});
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  })
})

router.get('/rating/:userId/:trailId', (req, res) => {
  //this accepts the userId and trailId
  StarRatings.findAll({
    where: {
      trailId: req.params.trailId,
    }
  })
  .then(foundRatings => {
    if (foundRatings.length === 0){
      res.status(404).send({message: 'No Rating for this trail found'});
      return;
    }
    //find ratings for a user
    const userSpecificRating = foundRatings.find(singleRating => singleRating.userId === req.params.userId);
    //loop through and get the average
    const ratingsTotal = foundRatings.reduce((acc, obj) => {
      acc += obj.rating;
      return acc
    },0);
    const average = ratingsTotal / foundRatings.length;
    res.status(200).send({average: average, userRating: userSpecificRating.rating });
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  })
});

module.exports = router;
