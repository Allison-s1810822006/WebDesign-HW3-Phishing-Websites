//index-html-點選重置密碼
function showResetForm() {
    document.getElementById('reset-form').style.display = 'block';
}
//rest-html-點選繼續按鈕
document.addEventListener('DOMContentLoaded', function () {
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
});


// 響應式設計手機模式
function toggleMenu() {
    const menu = document.querySelector('.nav-center');
    const icons = document.querySelector('.nav-right');
    menu.classList.toggle('show');
    icons.classList.toggle('show');
}
