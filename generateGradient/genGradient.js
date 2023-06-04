const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");

const selectMenu = document.querySelector(".select-box");
let gradCode = document.getElementById("gradCode");

const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");


const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`
}

const generateGradient = (isRandom) => {
    if (isRandom) {
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    console.log(gradient)
    gradCode.textContent = `background: ${gradient}`
}

const copyCode = () => {
    console.log(gradCode.textContent);
    navigator.clipboard.writeText(gradCode.textContent);

    setTimeout(() => copyBtn.innerHTML = "Copied", 1600);
}

colorInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
})

selectMenu.addEventListener("change", () => generateGradient(false));

refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);
