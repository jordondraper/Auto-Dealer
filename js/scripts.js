// toggle menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("xButton").classList.toggle("open");
}

const x = document.getElementById("xButton");

x.onclick = toggleMenu;



// review from data file
import { review } from '../data/review.js';
console.log(review);

// empty card

const myTarget = document.querySelector("#cards");

for (let x = 0; x < review.length; x++) {

    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = review[x].name
    
    const myReview = document.createElement('p')
    myReview.textContent = review[x].text

    const myRating = document.createElement('div')

    

console.log(review[x].stars)

for (let step = 0; step<review[x].stars; step++) {
    const revIndicator = document.createElement('img')
    revIndicator.src = "../svg/star-outline.svg"
    myRating.appendChild(revIndicator)
}

    //figure with child element
    mySection.appendChild(myName);
    mySection.appendChild(myRating);
    mySection.appendChild(myReview);

    myTarget.appendChild(mySection);
}// end of loop








// inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();