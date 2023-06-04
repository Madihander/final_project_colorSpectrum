const hex = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    "A", "B", "C", "D", "E", "F"
];

const changeBtn = document.getElementById("changeBtn")
const colorHex = document.getElementById("colorHex")
let colorRGB = document.getElementById("colorRGB")
let colorHSV = document.getElementById("colorHSV")
let colorHSL = document.getElementById("colorHSL")


const background = document.querySelector('.backgroundColor')
changeBtn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    colorHex.textContent = hexColor;
    background.style.background = hexColor;

    let string = hexToRgb(hexColor);
    colorRGB.textContent = `${string.r}, ${string.g}, ${string.b}`;

    string = hexToHsl(hexColor)
    colorHSL.textContent = `${string.h}°, ${string.s}%, ${string.l}%`;



})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function hexToRgb(hex) {
    // Remove the # character if present
    hex = hex.replace("#", "");

    // Convert the hex values to decimal
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    // Return the RGB values as an object
    return {r, g, b};
}


function hexToHsl(hex) {
    const rgb = hexToRgb(hex);
    return rgbToHsl(rgb.r, rgb.g, rgb.b);
}

function rgbToHsl(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
    // Calculate hue
    // No difference
    if (delta === 0)
        h = 0;
    // Red is max
    else if (cmax === r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax === g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return {h,s,l};
}

