document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const signUpLink = document.querySelector('.signup-link a');
    const loginLink = document.querySelector('.login-link a');
    const rightPanel = document.querySelector('.right-panel');
    const leftPanel = document.querySelector('.left-panel');

    function showSignUp() {
        container.classList.add('show-signup');
        rightPanel.style.display = 'none';
        leftPanel.style.display = 'flex';
    }

    function showLogin() {
        container.classList.remove('show-signup');
        rightPanel.style.display = 'flex';
        leftPanel.style.display = 'none';
    }

    if (signUpLink) {
        signUpLink.addEventListener('click', function(e) {
            e.preventDefault();
            showSignUp();
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            showLogin();
        });
    }
})