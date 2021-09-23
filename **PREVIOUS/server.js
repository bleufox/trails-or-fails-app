const express = require('express');
const session = require('express-session');
const router = require('./routes');
const sequelize = require('./config/connection');
const { Sequelize } = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const PORT = 3000;
const app = express();

app.use(express.json());
app.use(router);
app.use(express.static('public'));

//SET UP SESSION AND CONNECT TO SEQUELIZE DB
const sess = {
    secret: 'Mega Ultra Secret',
    cookie: {
        maxAge: 4800,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('http://localhost:3000'));
});


// ====== STAR RATINGS ======

//submit button
// const apiKey = '9c53f48bb7mshe71996a9d24cb5ap150945jsna9bb19aed148';
const searchBtn = document.getElementById('searchBtn');


const trailName = document.getElementById('trailName');
const mainEl = document.getElementById('main')

const setTrailImage = (imgEl) => {

}

// function getTrail(event) {
//     event.preventDefault();
// const citySearch = document.getElementById('citySearch').value;
$.get({
    url: 'https://trailapi-trailapi.p.rapidapi.com/trails/map/12/gpx/',
    headers: {
        'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
        'x-rapidapi-key': '9c53f48bb7mshe71996a9d24cb5ap150945jsna9bb19aed148'
    }

}).then(function (showTrail) {
    console.log(showTrail)
})
//         const trailContainer = document.getElementById ('trailContainer')
//         trailContainer.innerHTML = '';
//         for (let i = 0; i < showTrail.length; i++)


// searchBtn.click(function (event) {
//     event.preventDefault()
//     getTrail(event)
// })
// console.log(getTrail)
// })
// }

//get stars from class
const clickedStar = document.querySelector('.stars')
const stars = document.querySelectorAll('.stars a');

//add event listener to stars and prevent user from rating more than once
stars.forEach((star, starIndex) => {
    star.addEventListener('click', () => {
        console.log(`star of index ${starIndex} was clicked`)
        clickedStar.classList.add('disabled')
        stars.forEach((starReview, otherStarIndex) => {
            if (otherStarIndex <= starIndex) {
                starReview.classList.add('active');
            }
        })
        console.log(`star of index ${starIndex + 1} was clicked`)

    })
})