let countHome= document.getElementById("homescore")
let countGuest= document.getElementById("guestscore")

let hCount = 0
let gCount= 0

function homeAdd1() {
hCount += 1
countHome.innerText= hCount
}

function homeAdd2() {
hCount += 2
countHome.innerText= hCount
}

function homeAdd3() {
hCount += 3
countHome.innerText= hCount
}

function guestAdd1() {
gCount += 1
countGuest.innerText= gCount
}

function guestAdd2() {
gCount += 2
countGuest.innerText= gCount
}

function guestAdd3() {
gCount += 3
countGuest.innerText= gCount
}