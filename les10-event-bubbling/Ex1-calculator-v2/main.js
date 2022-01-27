let $inputContainer = document.querySelector('.input-container');
let $addActionBtn = document.getElementById('add-action');
let $sumActionBtn = document.getElementById('sum-action');
let $productActionBtn = document.getElementById('product-action');
let $resultContainer = document.getElementById('result-container');

let currentOperation = null;

function setDeleteBtnState() {
    let doDisable = $inputContainer.children.length <= 2;

    let $deleteBtns = document.querySelectorAll('.delete-btn');
    for (let i = 0; i < $deleteBtns.length; i++) {
        $deleteBtns[i].disabled = doDisable;
    }
}

function deleteRow(event) {
    console.log('click');
    let $target = event.target;

    // if ($inputContainer.children.length === 2) {
    //     return;
    // }

    if ($target.matches('.delete-btn')) {
        $target.closest('.input-row').remove();
        onInput();

        setDeleteBtnState();
    }
}

function addRow() {
    let rowHtml = `
            <div class="input-row">
                <input type="number" />
                <button class="delete-btn">Delete</button>
            </div>`;
    $inputContainer.insertAdjacentHTML('beforeend', rowHtml);

    setDeleteBtnState();

    // let $inputRow = document.createElement('div');
    // $inputRow.classList.add('input-row');
    // let $inputEl = document.createElement('input');
    // $inputEl.type = 'number';
    // $inputRow.append($inputEl);
    // let $delBtn = document.createElement('button');
    // $delBtn.classList.add('delete-btn');
    // $delBtn.innerText = 'Delete';
    // $inputRow.append($delBtn);
    //
    // $inputContainer.append($inputRow);
}

function getAllInput() {
    let inputVals = [];
    let $inputs = document.querySelectorAll('.input-container input');

    for (let i = 0; i < $inputs.length; i++) {
        let value = parseInt($inputs[i].value);
        if (!Number.isNaN(value)) {
            inputVals.push(value);
        }
    }

    return inputVals;
}

function sum() {
    currentOperation = 'sum';
    console.log('sum');
    let values = getAllInput();
    let result = 0;

    for (let i = 0; i < values.length; i++) {
        result += values[i];
    }

    console.log(result);
    $resultContainer.innerText = 'Sum: ' + result;
}

function product() {
    currentOperation = 'product';
    console.log('product');
    let values = getAllInput();
    let result = 1;

    for (let i = 0; i < values.length; i++) {
        result *= values[i];
    }
    console.log(result);
    $resultContainer.innerText = 'Product: ' + result;
}

function onInput() {
    console.log('test');
    switch (currentOperation) {
        case 'sum':
            sum();
            break;
        case 'product':
            product();
            break;
    }
}

$inputContainer.addEventListener('click', deleteRow);
$addActionBtn.addEventListener('click', addRow);
$sumActionBtn.addEventListener('click', sum);
$productActionBtn.addEventListener('click', product);
$inputContainer.addEventListener('input', onInput);

setDeleteBtnState();
