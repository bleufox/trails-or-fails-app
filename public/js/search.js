const city = document.getElementById("cityInput")
const searchBtn = document.getElementById('searchBtn');


//get trails by location
function citySearch() {
    const cityData = document.querySelector('#city-select').value;

    fetch("https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking"
        + "&q[city_cont]=" + cityData, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9c53f48bb7mshe71996a9d24cb5ap150945jsna9bb19aed148",
            "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            if (data.places.length > 0) {
                for (let i = 0; i < data.places.length; i++) {

                    const trail = data.places[i].activities[0]
                    console.log (trail)
                    const trailInfo = document.getElementById('trail-info');
                    const trailOneName = document.createElement('h2');
                    const trailName = (trail.name)
                    trailOneName.textContent = trailName
                    trailInfo.appendChild(trailOneName)
                    const trailOneActivities = document.createElement('h4');
                    trailOneActivities.textContent = (trail.activity_type_name)
                    trailInfo.appendChild(trailOneActivities)
                    const trailImage = document.createElement('img')
                    trailImage.style.width = "100%"
                    trailImage.src = trail.thumbnail
                    trailInfo.appendChild(trailImage)
                    const trailOneCity = document.createElement('h6');
                    trailOneCity.textContent = data.places[0].city
                    trailInfo.appendChild(trailOneCity)
                    const trailOneDescription = document.createElement('p');
                    trailOneDescription.textContent = (trail.description)
                    trailInfo.appendChild(trailOneDescription)
                    const trailOneLength = document.createElement('h6');
                    trailOneLength.textContent = (trail.length + ' miles')
                    trailInfo.appendChild(trailOneLength)
                    const trailRating = document.createElement('p')
                    const currentRating = trail.rating
                    trailRating.textContent = currentRating

                    const ratingObject = {}
                    ratingObject[trailName] = currentRating

                    const outerStarDiv = document.createElement('div')
                    outerStarDiv.classList.add('stars-outer')
                    const innerStarDiv = document.createElement('div')
                    innerStarDiv.classList.add('stars-inner')
                    outerStarDiv.appendChild(innerStarDiv)
                    const numberRatingSpan = document.createElement('span')
                    numberRatingSpan.classList.add('number-rating')
                    innerStarDiv.style.width = getRatings(ratingObject)

                    trailInfo.appendChild(outerStarDiv)
                    trailInfo.appendChild(numberRatingSpan)
                }
            }
        })
}

const starsTotal = 5;
console.log('run')
//get ratings
function getRatings(ratings) {
    for (let rating in ratings) {
        const starPercentage = (ratings[rating] /
            starsTotal) * 100;
        const starPercentageRounded = `${Math.round
            (starPercentage / 5) * 5}%`;
        return starPercentageRounded;
    }
}