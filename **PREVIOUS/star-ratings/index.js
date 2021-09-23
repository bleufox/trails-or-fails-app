//Initial Ratings

const ratings = {
    Tryon: 4.3,
    Springbrook: 2.7
}
//Total Stars
const starsTotal = 5;

//Run get ratings when DOM loads
document.addEventListener('DOMContentLoaded', 
getRatings);
// console.log('run')

//get ratings
function getRatings() {
    for(let rating in ratings) {
       // Get percentage
       const starPercentage = (ratings[rating] / 
        starsTotal) * 100;
        // console.log(starPercentage)

        //round to nearest 10
        const starPercentageRounded = `${Math.round
            (starPercentage / 5) * 5}%`;
        // console.log(starPercentageRounded)

        // set width of stars-inner to percentage
        document.querySelector(`.${rating} 
        .stars-inner`).style.width = 
        starPercentageRounded;
    }
}