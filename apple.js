const accountInput = document.getElementById('account');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

function validateInput() {
    const account = accountInput.value.trim();
    const password = passwordInput.value.trim();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(account);
    const isValidPassword = password.length >= 8;

    submitBtn.disabled = !(isValidEmail && isValidPassword);
}

accountInput.addEventListener('input', validateInput);
passwordInput.addEventListener('input', validateInput);
