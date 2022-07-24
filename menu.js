function setUsername(){
    username.innerHTML = 'yawa';
}

const confirmButton = document.querySelector('.menu-confirm');
confirmButton.addEventListener('click', setUsername);