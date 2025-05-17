
    const emailInput = document.querySelectorAll('.input-field')[0];
    const captchaInput = document.querySelectorAll('.input-field')[1];
    const submitBtn = document.getElementById('submitBtn');

    function checkInput() {
    if (emailInput.value.trim() && captchaInput.value.trim()) {
    submitBtn.disabled = false;
} else {
    submitBtn.disabled = true;
}
}

    emailInput.addEventListener('input', checkInput);
    captchaInput.addEventListener('input', checkInput);
