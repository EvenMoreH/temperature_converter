const inputField = document.getElementById("inputField");
const resetBtn = document.getElementById("resetBtn");

const resultCtoF = document.getElementById("resultCtoF");
const resultCtoK = document.getElementById("resultCtoK");
const resultFtoC = document.getElementById("resultFtoC");
const resultFtoK = document.getElementById("resultFtoK");
const resultKtoC = document.getElementById("resultKtoC");
const resultKtoF = document.getElementById("resultKtoF");

const labelCtoF = document.getElementById("rCF");
const labelCtoK = document.getElementById("rCK");
const labelFtoC = document.getElementById("rFC");
const labelFtoK = document.getElementById("rFK");
const labelKtoC = document.getElementById("rKC");
const labelKtoF = document.getElementById("rKF");

function calculateCtoF() {
    temp = parseFloat(inputField.value) || 0;
    if (temp != 0) {
        formula = (9 / 5) * temp + 32;
        resultCtoF.textContent = formula.toFixed(2);
    } else {
        resultCtoF.textContent = "";
    }
}

function calculateCtoK() {
    temp = parseFloat(inputField.value) || 0;
    if (temp != 0) {
        formula = temp + 273.15;
        resultCtoK.textContent = formula.toFixed(2);
    } else {
        resultCtoK.textContent = "";
    }
}

function calculateFtoC() {
    temp = parseFloat(inputField.value) || 0;
    if (temp != 0) {
        formula = (5 / 9) * (temp - 32);
        resultFtoC.textContent = formula.toFixed(2);
    } else {
        resultFtoC.textContent = "";
    }
}

function calculateFtoK() {
    temp = parseFloat(inputField.value) || 0;
    if (temp != 0) {
        formula = (5 / 9) * (temp - 32) + 273.15;
        resultFtoK.textContent = formula.toFixed(2);
    } else {
        resultFtoK.textContent = "";
    }
}

function calculateKtoC() {
    temp = parseFloat(inputField.value) || 0;
    if (temp != 0) {
        formula = temp - 273.15;
        resultKtoC.textContent = formula.toFixed(2);
    } else {
        resultKtoC.textContent = "";
    }
}

function calculateKtoF() {
    temp = parseFloat(inputField.value) || 0;
    if (temp != 0) {
        formula = (9 / 5) * (temp - 273.15) + 32;
        resultKtoF.textContent = formula.toFixed(2);
    } else {
        resultKtoF.textContent = "";
    }
}

inputField.addEventListener("input", calculateCtoF);
inputField.addEventListener("input", calculateCtoK);
inputField.addEventListener("input", calculateFtoC);
inputField.addEventListener("input", calculateFtoK);
inputField.addEventListener("input", calculateKtoC);
inputField.addEventListener("input", calculateKtoF);

inputField.addEventListener("input", () => {
    if (inputField.value.trim() != "" && inputField.value.trim() != 0) {
        labelCtoF.style.display = "inline";
        labelCtoK.style.display = "inline";
        labelFtoC.style.display = "inline";
        labelFtoK.style.display = "inline";
        labelKtoC.style.display = "inline";
        labelKtoF.style.display = "inline";
    } else {
        labelCtoF.style.display = "none";
        labelCtoK.style.display = "none";
        labelFtoC.style.display = "none";
        labelFtoK.style.display = "none";
        labelKtoC.style.display = "none";
        labelKtoF.style.display = "none";
    }
});

resetBtn.addEventListener("click", () => {
    inputField.value = "";
    calculateCtoF();
    calculateCtoK();
    calculateFtoC();
    calculateFtoK();
    calculateKtoC();
    calculateKtoF();
    labelCtoF.style.display = "none";
    labelCtoK.style.display = "none";
    labelFtoC.style.display = "none";
    labelFtoK.style.display = "none";
    labelKtoC.style.display = "none";
    labelKtoF.style.display = "none";
});
