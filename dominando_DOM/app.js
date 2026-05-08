// 1. Selección de elementos
const passwordDisplay = document.querySelector('#password-display');
const copyBtn = document.querySelector('#copy-btn');
const lengthSlider = document.querySelector('#length-slider');
const lengthValue = document.querySelector('#length-value');
const generateBtn = document.querySelector('#generate-btn');

// Checkboxes
const uppercaseEl = document.querySelector('#uppercase');
const lowercaseEl = document.querySelector('#lowercase');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');

// Strength
const strengthLabel = document.querySelector('#strength-label');
const strengthBars = document.querySelectorAll('.bar');

// caracteres
const charSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

// Sincronizar Slider
lengthSlider.addEventListener('input', (e) => {
    lengthValue.textContent = e.target.value;
    // Efecto visual de progreso en el slider 
    const percent = (e.target.value / e.target.max) * 100;
    e.target.style.background = `linear-gradient(to right, #A4FFAF ${percent}%, #18171F ${percent}%)`;
});

// Función Principal: Generar Contraseña
function generatePassword() {
    let generatedPassword = '';
    let availableChars = '';

    // Verificamos qué checkboxes están marcados
    if (uppercaseEl.checked) availableChars += charSets.uppercase;
    if (lowercaseEl.checked) availableChars += charSets.lowercase;
    if (numbersEl.checked) availableChars += charSets.numbers;
    if (symbolsEl.checked) availableChars += charSets.symbols;

    // Si no hay nada seleccionado, no hacemos nada
    if (availableChars === '') return '';

    const length = parseInt(lengthSlider.value);

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        generatedPassword += availableChars[randomIndex];
    }

    return generatedPassword;
}

// Lógica de Fuerza 
function updateStrength() {
    const checkedCount = [uppercaseEl, lowercaseEl, numbersEl, symbolsEl].filter(el => el.checked).length;
    const length = parseInt(lengthSlider.value);

    let strength = "TOO WEAK!";
    let color = "#F64A4A"; 
    let activeBars = 1;

    if (length > 8 && checkedCount >= 2) {
        strength = "WEAK";
        color = "#FB7C58"; 
        activeBars = 2;
    }
    if (length > 10 && checkedCount >= 3) {
        strength = "MEDIUM";
        color = "#F8CD65"; 
        activeBars = 3;
    }
    if (length > 12 && checkedCount === 4) {
        strength = "STRONG";
        color = "#A4FFAF"; 
        activeBars = 4;
    }

    // Aplicar a la UI
    strengthLabel.textContent = strength;
    strengthBars.forEach((bar, index) => {
        if (index < activeBars) {
            bar.style.backgroundColor = color;
            bar.style.borderColor = color;
        } else {
            bar.style.backgroundColor = 'transparent';
            bar.style.borderColor = '#E6E5EA';
        }
    });
}

// 5. Botón de Copiar
copyBtn.addEventListener('click', () => {
    const password = passwordDisplay.textContent;
    if (password === 'P4$5W0rD!' || password === '') return;

    navigator.clipboard.writeText(password).then(() => {
        // Feedback visual simple
        const originalSvg = copyBtn.innerHTML;
        copyBtn.textContent = 'COPIED';
        copyBtn.style.color = '#A4FFAF';
        copyBtn.style.fontSize = '0.8rem';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalSvg;
        }, 2000);
    });
});

// 6. Evento del botón Generar
generateBtn.addEventListener('click', () => {
    const password = generatePassword();
    if (password) {
        passwordDisplay.textContent = password;
        passwordDisplay.classList.remove('placeholder');
        updateStrength();
    }
});