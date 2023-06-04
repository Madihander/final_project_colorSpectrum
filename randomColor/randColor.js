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
    colorRGB.textContent = hexToRgb(hexColor);
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
    return `${r}, ${g}, ${b}`;
}

