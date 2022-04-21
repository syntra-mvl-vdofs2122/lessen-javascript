let $currencySelect = document.getElementById('currency');
let $amountInput = document.getElementById('amount');
let $dateInput = document.getElementById('date');
let $submitBtn = document.getElementById('submit-btn');
let $errorContainer = document.getElementById('error');
let $exchangeForm = document.getElementById('exchange-form');
let $resultContainer = document.getElementById('result');

// Draw functions

function drawError(error) {
    $errorContainer.innerText = error;
}

function drawOptions(currencies) {
    // currencies;
    let currenciesHTML = Object.keys(currencies).map((currency) => {
        return `<option value='${currency}'>${currency}</option>`;
    });

    $currencySelect.insertAdjacentHTML('beforeend', currenciesHTML.join(''));
}

function drawResult(result, currency) {
    $resultContainer.innerText = result.toLocaleString('nl-BE', {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'narrowSymbol',
    });
}

// Fetch functions

function getAllCurrencies() {
    return fetch(
        'http://api.exchangeratesapi.io/latest?access_key=38fd722407d3c75c5cb51b41603dc0a4',
        {
            method: 'GET',
            headers: {},
        },
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not fetch all currencies');
            }

            return response.json();
        })
        .then((body) => {
            return body.rates;
        })
        .catch((err) => {
            console.error(err);
        });
}

function getExchangeRate(currency, date) {
    return fetch(
        `http://api.exchangeratesapi.io/${date}?symbols=${currency}&access_key=38fd722407d3c75c5cb51b41603dc0a4`,
        {
            method: 'GET',
            headers: {},
        },
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not fetch all currencies');
            }

            return response.json();
        })
        .then((body) => {
            if (!body.success) {
                drawError(body.error.info);
                throw new Error(body.error.info);
            }

            console.log(body);
            return Object.values(body.rates)[0];
        })
        .catch((err) => {
            console.error(err);
            return NaN;
        });
}

// init functions

function initForm() {
    let today = new Date().toISOString().split('T')[0];

    $dateInput.value = today;

    $submitBtn.disabled = true;
    getAllCurrencies().then((currencies) => {
        drawOptions(currencies);
        $submitBtn.disabled = false;
    });
}

function formSubmit(event) {
    event.preventDefault();
    drawError('');

    let amount = parseFloat($amountInput.value);

    if (Number.isNaN(amount)) {
        drawError('Please insert a valid amount');
        return;
    }

    let currency = $currencySelect.value;
    let date = $dateInput.value;

    getExchangeRate(currency, date).then((exchangeRate) => {
        if (Number.isNaN(exchangeRate)) {
            return;
        }

        let result = exchangeRate * amount;
        drawResult(result, currency);
    });
}

initForm();
$exchangeForm.addEventListener('submit', formSubmit);
