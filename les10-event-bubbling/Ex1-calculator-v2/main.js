let $inputContainer = document.querySelector('.input-container');

function test(event) {
    if (event.target.matches('.delete-btn')) {
        console.log(event.target);
        console.log(event.target.closest('.input-row'));
    }
}

$inputContainer.addEventListener('click', test);
