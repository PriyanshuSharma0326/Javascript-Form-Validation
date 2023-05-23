let nextElement = null;

const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const submit = document.getElementById('submit-button');

function checkInput(inputElement) {
    nextElement = inputElement.nextElementSibling;
    if(!inputElement.value) {
        nextElement.classList.remove('hidden');
        nextElement.innerText = 'Error';
    }
    else {
        if(nextElement) {
            if(!nextElement.classList.contains('hidden')) {
                nextElement.classList.add('hidden');
            }
            nextElement = null;
        }
    }
}

function comparePasswords(pass1, pass2) {
    if(pass2.value) {
        nextElement = pass2.nextElementSibling;
        if(pass1.value !== pass2.value) {
            nextElement.classList.remove('hidden');
            nextElement.innerText = 'Password doesn\'t match!';
        }
        else {
            if(nextElement) {
                if(!nextElement.classList.contains('hidden')) {
                    nextElement.classList.add('hidden');
                }
                nextElement = null;
            }
        }
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput(username);
    checkInput(email);
    checkInput(phone);
    checkInput(password);
    checkInput(confirmPassword);
    comparePasswords(password, confirmPassword);
});