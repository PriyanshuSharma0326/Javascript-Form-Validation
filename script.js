let nextElement = null;

const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const submit = document.getElementById('submit-button');

let redOutline = '1px solid red';
let greenOutline = '1px solid green';

function validMail(mail) {
    if(mail.value) {
        nextElement = mail.nextElementSibling;
        if(!(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail.value))) {
            mail.style.outline = redOutline;
            nextElement.classList.remove('hidden');
            nextElement.innerText = 'Invalid email format!';
        }
        else {
            if(nextElement) {
                mail.style.outline = greenOutline;
                if(!nextElement.classList.contains('hidden')) {
                    nextElement.classList.add('hidden');
                }
                nextElement = null;
            }
        }
    }
}

function checkLength(inputElement, min, max) {
    nextElement = inputElement.nextElementSibling;
    if(inputElement.value.length) {
        if(inputElement.value.length <= min) {
            inputElement.style.outline = redOutline;
            nextElement.classList.remove('hidden');
            nextElement.innerText = `${inputElement.name} should be greater than ${min}`;
        }
        else if(inputElement.value.length >= max) {
            inputElement.style.outline = redOutline;
            nextElement.classList.remove('hidden');
            nextElement.innerText = `${inputElement.name} should be less than ${max}`;
        }
        else {
            if(nextElement) {
                inputElement.style.outline = greenOutline;
                if(!nextElement.classList.contains('hidden')) {
                    nextElement.classList.add('hidden');
                }
                nextElement = null;
            }
        }
    }
}

function checkInput(inputElement) {
    nextElement = inputElement.nextElementSibling;
    if(inputElement.value.length === 0) {
        inputElement.style.outline = redOutline;
        nextElement.classList.remove('hidden');
        nextElement.innerText = `${inputElement.name} can't be blank!`;
    }
    else {
        if(nextElement) {
            inputElement.style.outline = greenOutline;
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
            pass2.style.outline = redOutline;
            nextElement.classList.remove('hidden');
            nextElement.innerText = 'Password doesn\'t match!';
        }
        else {
            if(nextElement) {
                pass2.style.outline = greenOutline;
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
    checkLength(username, 5, 12);

    checkInput(email);
    validMail(email)

    checkInput(phone);
    checkLength(phone, 9, 11);

    checkInput(password);
    checkLength(password, 8, 15);

    checkInput(confirmPassword);

    comparePasswords(password, confirmPassword);
});
