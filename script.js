function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function col(min, max) {
    arr = new Array();
    while(arr.length < 6) {
        let pick = random(min,max);
        if(!arr.includes(pick)) {
            arr.push(pick);
        }
    }
}

const bcol = col(1,15);
const icol = col(16,30);
const ncol = col(31,45);
const gcol = col(46,60);
const ocol = col(61,75);

console.log(bcol, icol, ncol, gcol, ocol);