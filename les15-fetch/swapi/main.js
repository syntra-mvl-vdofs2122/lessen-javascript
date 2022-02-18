let $resourceBtnContainer = document.getElementById('resource-btn-container');

fetch('https://www.swapi.tech/api')
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Request failed');
        }

        console.log(response);

        return response.json();
    })
    .then(function (body) {
        console.log(body.result);

        let resources = Object.keys(body.result);

        resources.forEach((resource) => {
            let btnHTML = `<button data-url='${body.result[resource]}' class='resource-btn'>${resource}</button>`;
            $resourceBtnContainer.insertAdjacentHTML('beforeend', btnHTML);
        });
    })
    .catch(function (error) {
        console.error(error);
    });

// $btn.dataset.url
