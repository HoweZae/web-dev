/* TASK 1 */
console.log("Hello World!");

/* TASK 2 */
const a = true;
const b = null;
const c = 13;
const d = "The Alcott";

console.log(a, b, c, d);

/* TASK 3 */
let lecture = false;
let lab = false;

if (lecture) {
    if (lab)
        console.log("Passed the lecture and lab.");
    else
        console.log("Passed the lecture but not lab.");
} else {
    if (lab)
        console.log("Passed the lab but not lecture.");
    else
        console.log("Neither passed lecture nor lab.");
}

/* TASK 4 */
let i = 0;
let printable = "";

while (i != 5) {
    printable = printable + '*';
    console.log(printable);
    i++;
}

printable = "";
for (i = 0; i != 5; i++) {
    printable = printable + '*';
    console.log(printable);
}

/* TASK 5 */
function distance(x1, y1, x2, y2) {
    return ((x1 - x2)**2 + (y1 - y2)**2) ** (0.5);
}

console.log(distance(0, 0, 3, 4));
console.log(distance(5, 6, 8, 9))

/* TASK 6 */
const a1 = {
    x: 5, y: 6
}
const a2 = {
    x: 8, y: 9
}

const b1 = {
    x: 0, y: 0
}
const b2 = {
    x: 3, y: 4
}

function distanceobj(point1, point2) {
    return ((point1.x - point2.x)**2 + (point1.y - point2.y)**2) ** (0.5);
}

console.log(distanceobj(a1, a2));
console.log(distanceobj(b1, b2));

/* TASK 7 */
let arrayOfNumbers = [];

for (let i = 0; i != 11; i++) {
    arrayOfNumbers.push({num: i+2, square: (i+2)**2});
}
 
console.log(arrayOfNumbers);

/* TASK 8 */
// const card = document.querySelector(".card");
// console.dir(card);

// card.classList.add("border-white");

// card.style.backgroundColor = "blue";