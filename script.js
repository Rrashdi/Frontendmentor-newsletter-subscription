let input = document.querySelector('input');
let submitButton = document.querySelector('button.submitt-button');
let dismissButton = document.querySelector('.dismiss');
let success = document.querySelector('.success');
let subscribePage = document.querySelector('.container');

function check(email){
    return /^[a-z0-9]+@\w+.\w+$/i.test(email);
}
submitButton.addEventListener('click', () => {
    if(!check(input.value)){
        input.previousElementSibling
        .lastElementChild.style.display = 'block';
         input.classList.add('when-error');
    }else if(check(input.value)){
        success.classList.remove('none');
        subscribePage.classList.add('none');
        document.querySelector('.top p span').textContent = input.value;
    }
})
dismissButton.addEventListener('click', () => {
        success.classList.add('none');
        subscribePage.classList.remove('none');
        input.classList = [];
        input.value = '';
        input.previousElementSibling
        .lastElementChild.style.display = 'none';
})
