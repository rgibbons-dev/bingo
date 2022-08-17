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

    let header = "<div class=\"cell\">b</div> <div class=\"cell\">i</div> <div class=\"cell\">n</div> <div class=\"cell\">g</div> <div class=\"cell\">o</div>";
    let col0 = "<div class=\"cell\">" + bcol[0] + "</div> <div class=\"cell\">" + icol[0] + "</div> <div class=\"cell\">" + ncol[0] + "</div> <div class=\"cell\">" + gcol[0] + "</div> <div class=\"cell\">" + ocol[0] + "</div>";
    let col1 = "<div class=\"cell\">" + bcol[1] + "</div> <div class=\"cell\">" + icol[1] + "</div> <div class=\"cell\">" + ncol[1] + "</div> <div class=\"cell\">" + gcol[1] + "</div> <div class=\"cell\">" + ocol[1] + "</div>";
    let col2 = "<div class=\"cell\">" + bcol[2] + "</div> <div class=\"cell\">" + icol[2] + "</div> <div class=\"cell\">" + ncol[2] + "</div> <div class=\"cell\">" + gcol[2] + "</div> <div class=\"cell\">" + ocol[2] + "</div>";
    let col3 = "<div class=\"cell\">" + bcol[3] + "</div> <div class=\"cell\">" + icol[3] + "</div> <div class=\"cell\">" + ncol[3] + "</div> <div class=\"cell\">" + gcol[3] + "</div> <div class=\"cell\">" + ocol[3] + "</div>";
    let col4 = "<div class=\"cell\">" + bcol[4] + "</div> <div class=\"cell\">" + icol[4] + "</div> <div class=\"cell\">" + ncol[4] + "</div> <div class=\"cell\">" + gcol[4] + "</div> <div class=\"cell\">" + ocol[4] + "</div>";

    let inner = header + col0 + col1 + col2 + col3 + col4;

    let grid = document.createElement("div");
    grid.setAttribute("id", "grid-col");
    grid.innerHTML = header;
    document.appendChild(grid);
}

let chosen = new Array();

let reset = document.createElement('button');
reset.innerText = "new board?";
reset.addEventListener("click", function (event) {
    gen();
    chosen = new Array();
});
document.body.appendChild(reset);

let roll = document.createElement('button');
roll.innerText = "roll";
roll.addEventListener("click", function (event) {
    if (chosen.length === 75) { return; }
    let ball = random(1,75);
    while (chosen.includes(ball)) {
        ball = random(1,75);
    }
    chosen.push(ball);
    let num = document.createElement("p");
    num.innerText = ball;
    document.body.appendChild(num)
});
document.body.appendChild(roll);