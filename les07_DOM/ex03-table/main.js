/**
 *
 * @param {HTMLElement} container
 * @param {Object[]} content
 */

function genTableTwo(container, content) {
    let html = `<table><thead><tr>`;

    let headers = Object.keys(content[0]);

    for (let i = 0; i < headers.length; i++) {
        html += `<th>${headers[i]}</th>`;
    }

    html += `</tr></thead><tbody>`;

    for (let j = 0; j < content.length; j++) {
        html += `<tr>`;

        let values = Object.values(content[j]);

        for (let k = 0; k < values.length; k++) {
            html += `<td>${values[k]}</td>`;
        }

        html += `</tr>`;
    }

    html += `</tbody></table>`;

    container.insertAdjacentHTML('beforeend', html);
}

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

    let newTbody = document.createElement('tbody');

    for (let j = 0; j < content.length; j++) {
        let newTbodyRow = document.createElement('tr');

        let values = Object.values(content[j]);

        for (let k = 0; k < values.length; k++) {
            let newTd = document.createElement('td');
            newTd.innerText = values[k];

            newTbodyRow.append(newTd);
        }

        newTbody.append(newTbodyRow);
    }

    newTable.append(newTbody);

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

genTableTwo(aContainer, data);

let containerTwo = document.getElementById('container-two');

let dataTwo = [
    {
        1: 'Test1',
        2: 'Test2',
        3: 'Test3',
        4: 'Test4',
        5: 'Test5',
        6: 'Test6',
    },
    {
        1: 'Test11',
        2: 'Test12',
        3: 'Test13',
        4: 'Test14',
        5: 'Test15',
        6: 'Test16',
    },
    {
        1: 'Test21',
        2: 'Test22',
        3: 'Test23',
        4: 'Test24',
        5: 'Test25',
        6: 'Test26',
    },
];

genTableTwo(containerTwo, dataTwo);

// let testDiv = document.getElementById('test');
//
// let innerText = testDiv.innerText;
//
// let textContent = testDiv.textContent;
//
// console.log({ innerText, textContent });
