function genSelect(container, options) {
    let newSelect = document.createElement('select');

    let keys = Object.keys(options);
    console.log(keys);
    for (let i = 0; i < keys.length; i++) {
        let curKey = keys[i];
        let curVal = options[curKey];

        let newOption = document.createElement('option');
        newOption.value = curKey;
        newOption.innerText = curVal;

        newSelect.append(newOption);
    }

    container.append(newSelect);
}

function genSelectTwo(container, options) {
    let html = `<select>`;

    let keys = Object.keys(options);

    for (let i = 0; i < keys.length; i++) {
        let curKey = keys[i];
        let curVal = options[curKey];

        html += `<option value="${curKey}">${curVal}</option>`;
    }

    html += `</select>`;

    console.log(html);

    container.insertAdjacentHTML('beforeend', html);
}

let form = document.getElementById('form-one');
let data = {
    willy: 'Willy Vervest',
    arthur: 'Arthur Lambrechts',
    bram: 'Bram Dieudonne',
    lennart: 'Lennart Verschelden',
};

let dataTwo = {
    one: 1,
    two: 2,
    three: 3,
};

genSelectTwo(form, data);
genSelectTwo(form, dataTwo);
