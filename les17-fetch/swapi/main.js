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
    let resourceItemHTML = results.map(function (result) {
        return `<button data-url='${
            result['url']
        }' class='resource-item-btn'>${name === 'films' ? result['title'] : result['name']}</button>`;
    });

    $resourceItemContainer.innerHTML =
        `<h2>${name}</h2>` + resourceItemHTML.join('');
}

function drawResourceDetails(name, details) {
    let detailsKeys = Object.keys(details);
    let ignoreKeys = ['name', 'title', 'url', 'created', 'edited'];
    let urlsKeys = [
        'homeworld',
        'people',
        'films',
        'vehicles',
        'planets',
        'species',
        'vehicles',
        'starships',
        'residents',
        'characters',
        'pilots',
    ];

    let detailHTML = detailsKeys.map(function (key) {
        if (ignoreKeys.includes(key)) {
            return Promise.resolve('');
        }

        if (urlsKeys.includes(key)) {
            return fetchExtraDetails(key, details[key]);
        }

        return Promise.resolve(
            `<p><strong>${key}:</strong> ${details[key]}</p>`,
        );
    });

    console.log(detailHTML);
    return Promise.all(detailHTML).then((results) => {
        $resourceDetailsContainer.innerHTML =
            `<h2>${name}</h2>` + results.join('');
    });
}

function fetchExtraDetails(key, urls) {
    if (typeof urls === 'string') {
        urls = [urls];
    }

    let extraDetailsFetches = urls.map((url) => {
        return fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('fetchResourceList failed');
                }
                return response.json();
            })
            .then(function (body) {
                return `<button 
                            data-url='${url}' 
                            class='resource-details-extra-btn'>
                            ${body['title'] ? body['title'] : body['name']}
                        </button>`;
            })
            .catch(function (error) {
                console.error(error);
            });
    });

    return Promise.all(extraDetailsFetches).then((extraBtns) => {
        return `<p><strong>${key}:</strong> ${extraBtns.join('')}</p>`;
    });
}

function fetchResourceList() {
    $resourceListContainer.classList.add('loading');

    fetch('https://swapi.dev/api/')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('fetchResourceList failed');
            }

            return response.json();
        })
        .then(function (body) {
            console.log(body);

            drawResourceList(body);
        })
        .catch(function (error) {
            console.error(error);
        })
        .finally(() => {
            $resourceListContainer.classList.remove('loading');
        });
}

function fetchResourceItem(name, url) {
    $resourceItemContainer.classList.add('loading');
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`fetchResourceItem(${name}, ${url}) failed`);
            }

            return response.json();
        })
        .then(function (body) {
            drawResourceItem(name, body.results);
        })
        .catch(function (error) {
            console.error(error);
        })
        .finally(() => {
            $resourceItemContainer.classList.remove('loading');
        });
}

function fetchResourceDetails(name, url) {
    $resourceDetailsContainer.classList.add('loading');

    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`fetchResourceItem(${name}, ${url}) failed`);
            }

            return response.json();
        })
        .then(function (body) {
            return drawResourceDetails(name, body);
        })
        .catch(function (error) {
            console.error(error);
        })
        .finally(() => {
            $resourceDetailsContainer.classList.remove('loading');
        });
}

function resourceListClicked(event) {
    if (event.target.matches('.resource-btn')) {
        let name = event.target.innerText;
        let url = event.target.dataset.url;

        fetchResourceItem(name, url);
    }
}

function resourceItemClicked(event) {
    if (event.target.matches('.resource-item-btn')) {
        let name = event.target.innerText;
        let url = event.target.dataset.url;

        fetchResourceDetails(name, url);
    }
}

function resourceDetailsClicked(event) {
    if (event.target.matches('.resource-details-extra-btn')) {
        let name = event.target.innerText;
        let url = event.target.dataset.url;

        fetchResourceDetails(name, url);
    }
}

fetchResourceList();

$resourceListContainer.addEventListener('click', resourceListClicked);
$resourceItemContainer.addEventListener('click', resourceItemClicked);
$resourceDetailsContainer.addEventListener('click', resourceDetailsClicked);
