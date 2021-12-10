/**
 * Generate a list
 * @param {HTMLElement} container
 * @param {Array} content
 *
 * Array.isArray(val)
 * typeof val
 */
function genList(container, content) {
    let newUl = document.createElement('ul');

    for (let i = 0; i < content.length; i++) {
        let contentItem = content[i];
        let newLi = document.createElement('li');

        if (Array.isArray(contentItem)) {
            let newSubUl = document.createElement('ul');

            for (let j = 0; j < contentItem.length; j++) {
                let newSubLi = document.createElement('li');
                newSubLi.innerText = contentItem[j];
                newSubUl.append(newSubLi);
            }

            newLi.append(newSubUl);
        } else {
            newLi.innerText = content[i];
        }

        newUl.append(newLi);
    }

    container.append(newUl);
}

function genListTwo(container, content) {
    let newUl = document.createElement('ul');

    for (let i = 0; i < content.length; i++) {
        let contentItem = content[i];
        let newLi = document.createElement('li');

        if (Array.isArray(contentItem)) {
            genListTwo(newLi, contentItem);
        } else {
            newLi.innerText = content[i];
        }

        newUl.append(newLi);
    }

    container.append(newUl);
}

let aContainer = document.getElementById('container');
let items = [
    'item 1',
    'item 2',
    [
        'subitem 1',
        'subitem 2',
        'subitem 3',
        ['subsubItem 1', 'subsubItem 2', 'subsubItem 3', 'subsubItem 4'],
    ],
    'item 4',
];

genListTwo(aContainer, items);
