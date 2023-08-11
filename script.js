
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");

const hexInput = document.getElementById("hex");

function updateHexColor() {
    const red = parseInt(redSlider.value);
    const green = parseInt(greenSlider.value);
    const blue = parseInt(blueSlider.value);

    const hexCode = `#${(1 << 24 | red << 16 | green << 8 | blue).toString(16).slice(1).toUpperCase()}`;
    hexInput.value = hexCode;

    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;

    hexInput.style.backgroundColor = hexCode;
}

redSlider.addEventListener("input", updateHexColor);
greenSlider.addEventListener("input", updateHexColor);
blueSlider.addEventListener("input", updateHexColor);

updateHexColor();
