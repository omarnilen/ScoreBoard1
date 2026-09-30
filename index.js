let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    console.log("button clicked")
}
function increaseHomeScoreTwo(){
    homeScore+= 2
    homeScoreEl.textContent = homeScore
    console.log("button clicked")
}
function increaseHomeScoreThree(){
    homeScore+= 3
    homeScoreEl.textContent = homeScore
    console.log("button clicked")
}
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0
console.log("button clicked")

function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    console.log("button clicked")
}
function increaseGuestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
    console.log("button clicked")
}
function increaseGuestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
    console.log("button clicked")
}
window.increaseHomeScoreOne = increaseHomeScoreOne
window.increaseHomeScoreTwo = increaseHomeScoreTwo
window.increaseHomeScoreThree = increaseHomeScoreThree

window.increaseGuestScoreOne = increaseGuestScoreOne
window.increaseGuestScoreTwo = increaseGuestScoreTwo
window.increaseGuestScoreThree = increaseGuestScoreThree