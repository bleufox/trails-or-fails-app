

//get stars from class
const clickedStar = document.querySelector('.stars')
const stars = document.querySelectorAll('.stars a');

// //add event listener to stars and prevent user from rating more than once
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

// -------------- Fetches the API data based on user's query search --------------

function getAPI(trailSearch) {
    fetch(`'https://trailapi-trailapi.p.rapidapi.com/trails/map/12/gpx/'
    
    
    https://www.googleapis.com/books/v1/volumes?q=${trailSearch}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            handleData(data);
        });
};

// -------------- Event listener input's user's query into the API fetch function --------------

// // var axios = require("axios").default;
// // mapboxgl.accessToken = 'pk.eyJ1IjoiY2VkYXJoYWx2b3Jzb24iLCJhIjoiY2tzZHY1anlsMHVkcTJ0bzI0NzU1Z2FmMCJ9.5523rDcsb_V3eRU7jnW_rw';

// // navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true 
// // });



// // function successLong(position) {
// //     console.log(position)
// //     setupMap([position.coords.longitude])
// // }

submitBtn.addEventListener('click', handleClick);


function handleClick() {
    const userQuery = searchInputEl.value;
    getAPI(userQuery);
};

// // function successLatatude(position) {
// //     console.log(position)
// //     setupMap([position.coords.latitude])
// // }


// // function setupMap(center) {
// //     var options = {
// //         method: 'GET',
// //         url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
// //         params: {lon: ${}, lat: position.coords.latitude },
// //         headers: {
// //           'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
// //           'x-rapidapi-key': '9c53f48bb7mshe71996a9d24cb5ap150945jsna9bb19aed148'
// //         }
// //       };





//     // }

