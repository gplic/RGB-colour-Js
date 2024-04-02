let rvalue = document.getElementById("redIn");
let gvalue = document.getElementById("greenIn");
let bvalue = document.getElementById("blueIn");
let display = document.getElementById("display");
let numDisplay = document.getElementById("rgb-code");
let wValue = document.getElementById("preWidth");
let hValue = document.getElementById("preHeight");
let blackBtn = document.getElementById("black");
let whiteBtn = document.getElementById("white");

rvalue.addEventListener("input", colorChange);
gvalue.addEventListener("input", colorChange);
bvalue.addEventListener("input", colorChange);

wValue.addEventListener("change", sizeChange);
hValue.addEventListener("change", sizeChange);

whiteBtn.addEventListener("click", allWhite);
blackBtn.addEventListener("click", allBlack);

function allWhite() {
    rvalue.value = 255;
    gvalue.value = 255;
    bvalue.value = 255;
    display.style.background = `rgb(255, 255, 255)`
    numDisplay.innerHTML = `rgb(255, 255, 255)`
}

function allBlack() {
    rvalue.value = 0;
    gvalue.value = 0;
    bvalue.value = 0;
    display.style.background = `rgb(0, 0, 0)`
    numDisplay.innerHTML = `rgb(0, 0, 0)`
}

function sizeChange() {
    // input
    let height = hValue.value;
    let width = wValue.value;

    // checking H value
    if (height < 50) {
        height = 50;
        hValue.value = 50;
    } else if (height > 400) {
        height = 400;
        hValue.value = 400;  
    }

    // checking W value
    if (width < 50) {
        width = 50;
        wValue.value = 50;
    } else if (width > 400) {
        width = 400;
        wValue.value = 400;  
    }

    // output
    display.style.width = `${width}px`
    display.style.height = `${height}px`
}

function colorChange () {
    // Input
    let R = rvalue.value;
    let G = gvalue.value;
    let B = bvalue.value;

    // checking R value
    if (R < 0) {
        R = 0;
        rvalue.value = 0;
    } else if (R > 255) {
        R = 255;
        rvalue.value = 255;  
    }

    // checking G value
    if (G < 0) {
        G = 0;
        gvalue.value = 0;
    } else if (G > 255) {
        G = 255;
        gvalue.value = 255;  
    }

    // checking B value
    if (B < 0) {
        B = 0;
        bvalue.value = 0;
    } else if (B > 255) {
        B = 255;
        bvalue.value = 255;  
    }

    // Output
    display.style.background = `rgb(${R}, ${G}, ${B})`
    numDisplay.innerHTML = `rgb(${R}, ${G}, ${B})`
}