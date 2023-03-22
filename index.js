// let elem = document.body.childNodes[3];
// console.log(elem);
// let parentElem = document.body.firstElementChild.children;
// console.log(parentElem);
// let divf = document.body.firstChild.nextSibling;
// console.log(divf);
// let divg = document.body.firstChild.nextSibling.nextSibling.nextSibling;
// console.log(divg);
// let divh = document.body.childNodes[3].childNodes[3];
// console.log(divh)
// let toss = document.getElementById("to");
// console.log(toss);
// toss.style.fontSize = "20px";

// let under = document.querySelectorAll("div > p");
// console.log(under);
// under[0].style.color = "blue";
// under[1].style.color = "red";

// let headEd = document.createElement("h1");
// headEd.innerText = "Welcome to Jumanji";
// document.body.appendChild(headEd);

// let vigo = document.createElement("button");
// document.body.appendChild(vigo);
// vigo.innerText = "See More";

function toggleClass() {
    let divEl = document.getElementById("box");
    divEl.classList.toggle("home");
}
function switchMode() {
    let BodyEl = document.body;
    BodyEl.classList.toggle("light")
}
let btnElem = document.getElementById("switchBtn")
btnElem.addEventListener("click", switchMode);


let overLayEl = document.getElementById("modal-overlay");

function showModal() {
    console.log("Clicked!");
    overLayEl.style.display = "block";
}
function closeModal() {
    overLayEl.style.display = "none"
}