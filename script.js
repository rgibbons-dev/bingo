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

function gen() {
    let bcol = col(1,15);
    let icol = col(16,30);
    let ncol = col(31,45)
    let gcol = col(46,60);
    let ocol = col(61,75);
}

document.body.innerHTML = "<h1>test item: " + bcol[1] + "</h1>" 