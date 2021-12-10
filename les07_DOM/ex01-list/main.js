/**
 * Generate a list
 * @param {HTMLElement} container
 * @param {Array} content
 */
function genList(container, content) {
    let newUl = document.createElement('ul');

    for (let i = 0; i < content.length; i++) {
        let newLi = document.createElement('li');
        newLi.innerText = content[i];
        newUl.append(newLi);
    }

    container.append(newUl);
}

let aContainer = document.getElementById('container');
let items = ['item 1', 'item 2', 'item 3', 'item 4'];

genList(aContainer, items);
