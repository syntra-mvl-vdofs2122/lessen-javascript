let $inputContainer = document.querySelector('.input-container');
let $sumAction = document.getElementById('sum-action');

function test(event) {
    if (event.target.matches('.delete-btn')) {
        console.log(event.target);
        console.log(event.target.closest('.input-row'));
    }
}

$inputContainer.addEventListener('click', test);

function testTwo(event) {
    let $inputFields = document.querySelectorAll('.input-container input');
    let values = [];
    console.log($inputFields);

    // for (let i = 0; i < $inputFields.length; i++) {
    //     values.push($input[i].value);
    // }

    $inputFields.forEach(function ($input) {
        values.push($input.value);
    });

    console.log(values);
}

$sumAction.addEventListener('click', testTwo);
