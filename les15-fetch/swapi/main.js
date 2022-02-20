let $resourceListContainer = document.getElementById('resource-list-container');
let $resourceItemContainer = document.getElementById('resource-item-container');
let $resourceDetailsContainer = document.getElementById(
    'resource-details-container',
);

function drawResourceList(resourceList) {
    let resources = Object.keys(resourceList);

    resources.forEach((resource) => {
        let btnHTML = `<button data-url='${resourceList[resource]}' class='resource-btn'>${resource}</button>`;
        $resourceListContainer.insertAdjacentHTML('beforeend', btnHTML);
    });
}

function drawResourceItem(name, results) {
    $resourceItemContainer.insertAdjacentHTML('beforeend', `<h2>${name}</h2>`);

    results.forEach(function (result) {
        let btnHTML = `<button data-url='${
            result['url']
        }' class='resource-item-btn'>${
            name === 'films' ? result['title'] : result['name']
        }</button>`;
        $resourceItemContainer.insertAdjacentHTML('beforeend', btnHTML);
    });
}

function drawResourceDetails(name, details) {
    $resourceDetailsContainer.insertAdjacentHTML(
        'beforeend',
        `<h2>${name}</h2>`,
    );

    let detailsKeys = Object.keys(details);

    detailsKeys.forEach(function (key) {
        let detailsHTML = `<p><strong>${key}:</strong> ${details[key]}</p>`;
        $resourceDetailsContainer.insertAdjacentHTML('beforeend', detailsHTML);
    });
}

function fetchResourceList() {
    fetch('https://swapi.dev/api/')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('fetchResourceList failed');
            }

            console.log(response);

            return response.json();
        })
        .then(function (body) {
            console.log(body);

            drawResourceList(body);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function fetchResourceItem(name, url) {
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`fetchResourceItem(${name}, ${url}) failed`);
            }

            return response.json();
        })
        .then(function (body) {
            console.log(body);

            drawResourceItem(name, body.results);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function fetchResourceDetails(name, url) {
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`fetchResourceItem(${name}, ${url}) failed`);
            }

            return response.json();
        })
        .then(function (body) {
            console.log(body);

            drawResourceDetails(name, body);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function resourceListClicked(event) {
    if (event.target.matches('.resource-btn')) {
        let name = event.target.innerText;
        let url = event.target.dataset.url;

        $resourceItemContainer.innerHTML = '';
        $resourceDetailsContainer.innerHTML = '';
        fetchResourceItem(name, url);
    }
}

function resourceItemClicked(event) {
    if (event.target.matches('.resource-item-btn')) {
        let name = event.target.innerText;
        let url = event.target.dataset.url;

        $resourceDetailsContainer.innerHTML = '';
        fetchResourceDetails(name, url);
    }
}

fetchResourceList();

$resourceListContainer.addEventListener('click', resourceListClicked);
$resourceItemContainer.addEventListener('click', resourceItemClicked);
