/**
 *
 * @param {HTMLElement} container
 * @param {Object[]} content
 */

function genTable(container, content) {
    let newTable = document.createElement('table');
    let newThead = document.createElement('thead');
    let newTheadRow = document.createElement('tr');

    let headers = Object.keys(content[0]);

    for (let i = 0; i < headers.length; i++) {
        let newTh = document.createElement('th');
        newTh.innerText = headers[i];
        newTheadRow.append(newTh);
    }

    newThead.append(newTheadRow);
    newTable.append(newThead);

    container.append(newTable);
}

let aContainer = document.getElementById('container');

let data = [
    {
        firstName: 'Willy',
        lastName: 'Vervest',
        age: 34,
    },
    {
        firstName: 'Arthur',
        lastName: 'Lambrecht',
        age: 22,
    },
    {
        firstName: 'Bram',
        lastName: 'Dieudonne',
        age: 19,
    },
    {
        firstName: 'Lennart',
        lastName: 'Verschelden',
        age: 24,
    },
    {
        firstName: 'Raf',
        lastName: 'Vergauwen',
        age: 23,
    },
    {
        firstName: 'Tristan',
        lastName: 'Coopman',
        age: 25,
    },
    {
        firstName: 'Vincent',
        lastName: 'Janssens',
        age: 23,
    },
];

genTable(aContainer, data);
