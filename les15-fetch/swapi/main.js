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

    let detailsKeys = Object.keys(details);

    detailsKeys.forEach(function (key) {
        let detailsHTML;
        if (ignoreKeys.includes(key)) {
            return;
        }

        if (urlsKeys.includes(key)) {
            let urls = details[key];

            if (!Array.isArray(urls)) {
                urls = [urls];
            }

            detailsHTML = fetchExtraDetails(key, urls);
        } else {
            detailsHTML = Promise.resolve(
                `<p><strong>${key}:</strong> ${details[key]}</p>`,
            );
        }

        detailsHTML
            .then(function (detailsHTML) {
                $resourceDetailsContainer.insertAdjacentHTML(
                    'beforeend',
                    detailsHTML,
                );
            })
            .catch(function (error) {
                console.error(error);
            });
    });
}

function fetchResourceList() {
    fetch('https://swapi.dev/api/')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('fetchResourceList failed');
            }

            return response.json();
        })
        .then(function (body) {
            drawResourceList(body);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function fetchExtraDetails(key, urls) {
    console.log({ key, urls });

    let fetches = urls.map(function (url) {
        return fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error(`fetchExtraDetails(${key}, ${url}) failed`);
                }

                return response.json();
            })
            .then(function (body) {
                return `<button 
                            data-url='${url}' 
                            class='resource-details-extra-btn'>
                            ${body['title'] ? body['title'] : body['name']}
                        </button>`;
            });
    });

    return Promise.all(fetches).then(function (buttons) {
        let btnHTML = buttons.reduce(function (prevVal, button) {
            return prevVal + button;
        }, '');

        return `<p><strong>${key}:</strong> ${btnHTML}</p>`;
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

function resourceDetailsExtraClicked(event) {
    if (event.target.matches('.resource-details-extra-btn')) {
        let name = event.target.innerText;
        let url = event.target.dataset.url;

        let splitUrl = url.split('/');
        let resourceName = splitUrl[splitUrl.length - 3];
        let resourceUrl = splitUrl.slice(0, -2).join('/');

        $resourceItemContainer.innerHTML = '';
        $resourceDetailsContainer.innerHTML = '';
        fetchResourceItem(resourceName, resourceUrl);
        fetchResourceDetails(name, url);
    }
}

fetchResourceList();

$resourceListContainer.addEventListener('click', resourceListClicked);
$resourceItemContainer.addEventListener('click', resourceItemClicked);
$resourceDetailsContainer.addEventListener(
    'click',
    resourceDetailsExtraClicked,
);
