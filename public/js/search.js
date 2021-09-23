const city = document.getElementById("cityInput")
// const citySearch = document.getElementById('citySearch')
const searchBtn = document.getElementById('searchBtn');
const trailItem = document.getElementById('trailItem');
const trailList = document.getElementById('trailList');
const trailInfo = document.getElementById('trail-info');
const form = document.getElementById('searchForm');

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
            if (data.places.length > 0) {

                console.log(data);

                const resultOne = document.getElementById('resultOne');
                resultOne.textContent = data.places[0].name
                const resultOneCity = document.getElementById('resultOneCity');
                resultOneCity.textContent = data.places[0].city
                const resultOneDirections = document.getElementById('resultOneDirections');
                resultOneDirections.textContent = data.places[0].directions

                const resultTwo = document.getElementById('resultTwo');
                resultTwo.textContent = data.places[1].name
                const resultTwoCity = document.getElementById('resultOneCity');
                resultTwoCity.textContent = data.places[1].city
                const resultTwoDirections = document.getElementById('resultOneDirections');
                resultTwoDirections.textContent = data.places[1].directions

                const resultThree = document.getElementById('resultThree');
                resultThree.textContent = data.places[2].name
                const resultThreeCity = document.getElementById('resultThreeCity');
                resultThreeCity.textContent = data.places[2].city
                const resultThreeDirections = document.getElementById('resultThreeDirections');
                resultThreeDirections.textContent = data.places[2].directions

                const resultFour = document.getElementById('resultFour');
                resultFour.textContent = data.places[3].name
                const resultFourCity = document.getElementById('resultFourCity');
                resultFourCity.textContent = data.places[3].city
                const resultFourDirections = document.getElementById('resultFourDirections');
                resultFourDirections.textContent = data.places[3].directions

                const resultFive = document.getElementById('resultFive');
                resultFive.textContent = data.places[4].name
                const resultFiveCity = document.getElementById('resultFiveCity');
                resultFiveCity.textContent = data.places[4].city
                const resultFiveDirections = document.getElementById('resultFiveDirections');
                resultFiveDirections.textContent = data.places[4].directions

                const resultSix = document.getElementById('resultSix');
                resultSix.textContent = data.places[5].name
                const resultSixCity = document.getElementById('resultSixCity');
                resultSixCity.textContent = data.places[5].city
                const resultSixDirections = document.getElementById('resultSixDirections');
                resultSixDirections.textContent = data.places[5].directions
            }})}