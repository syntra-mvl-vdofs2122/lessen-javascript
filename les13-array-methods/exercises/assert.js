console.log('Assert ready!');

function loadCss(filename) {}

function appendTo($element, html) {
    $element.innerHTML += html;
}

function spacing() {
    return '<span style="color: transparent; display: inline-block; width: 5rem;"></span>';
}

function fail() {
    return '<span style="color: indianred; display: inline-block; width: 5rem;">[fail]</span>';
}

function success() {
    return '<span style="color: lawngreen; display: inline-block; width: 5rem;">[success]</span>';
}

function assertFunctionExists(functionName, $assertContainer) {
    if (typeof window[functionName] === 'function') {
        appendTo(
            $assertContainer,
            `<p class="asserter success">${success()} Function <code>${functionName}()</code> found</p>`
        );
    } else {
        appendTo(
            $assertContainer,
            `<p class="asserter fail">${fail()} Function <code>${functionName}()</code> not found</p>`
        );
    }
}

async function assertResult(
    $assertContainer,
    functionName,
    params,
    expected,
    name = ''
) {
    const paramsString = JSON.stringify(params);
    const expectedString = JSON.stringify(expected);
    const actualString = JSON.stringify(
        await window[functionName].apply(this, params)
    );

    if (name) {
        appendTo($assertContainer, `<h3>${name}:</h3>`);
    }

    if (expectedString === actualString) {
        appendTo(
            $assertContainer,
            `<p class="asserter success">${success()} <code>${functionName}(${paramsString.substring(
                1,
                paramsString.length - 1
            )})</code> did return <code>${expectedString}</code></p>`
        );
    } else {
        appendTo(
            $assertContainer,
            `<p class="asserter fail">${fail()} <code>${functionName}(${paramsString.substring(
                1,
                paramsString.length - 1
            )})</code> did not return <code>${expectedString}</code></p><p>${spacing()} it returned: <code>${actualString}</code></p>`
        );
    }
}

(function prepFile() {
    const $assertContainer = document.getElementById('assertions');
    const containers = [
        `<h1>Array Map</h1>`,
        `<div id="doubleNumbers"><h2>doubleNumbers</h2><div class="assert-container"></div></div>`,
        `<div id="stringItUp"><h2>stringItUp</h2><div class="assert-container"></div></div>`,
        `<div id="capitalizeNames"><h2>capitalizeNames</h2><div class="assert-container"></div></div>`,
        `<div id="namesOnly"><h2>namesOnly</h2><div class="assert-container"></div></div>`,
        `<div id="makeStrings"><h2>makeStrings</h2><div class="assert-container"></div></div>`,
        `<h1>Array Reduce</h1>`,
        `<div id="total"><h2>total</h2><div class="assert-container"></div></div>`,
        `<div id="stringConcat"><h2>stringConcat</h2><div class="assert-container"></div></div>`,
        `<div id="totalVotes"><h2>totalVotes</h2><div class="assert-container"></div></div>`,
        `<div id="shoppingSpree"><h2>shoppingSpree</h2><div class="assert-container"></div></div>`,
        `<div id="flatten"><h2>flatten</h2><div class="assert-container"></div></div>`,
        `<h1>Array Filter</h1>`,
        `<div id="fiveAndGreaterOnly"><h2>fiveAndGreaterOnly</h2><div class="assert-container"></div></div>`,
        `<div id="evensOnly"><h2>evensOnly</h2><div class="assert-container"></div></div>`,
        `<div id="fiveCharactersOrFewerOnly"><h2>fiveCharactersOrFewerOnly</h2><div class="assert-container"></div></div>`,
        `<div id="peopleWhoBelongToTheIlluminati"><h2>peopleWhoBelongToTheIlluminati</h2><div class="assert-container"></div></div>`,
        `<div id="ofAge"><h2>ofAge</h2><div class="assert-container"></div></div>`,
    ];

    const fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute(
        'href',
        'https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css'
    );
    document.getElementsByTagName('head')[0].appendChild(fileref);

    containers.forEach((html) => appendTo($assertContainer, html));
})();

(function doubleNumbers() {
    const functionName = 'doubleNumbers';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [[2, 5, 100]],
        [4, 10, 200],
        'doubleNumbers'
    );
})();

(function stringItUp() {
    const functionName = 'stringItUp';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [[2, 5, 100]],
        ['2', '5', '100'],
        'stringItUp'
    );
})();

(function capitalizeNames() {
    const functionName = 'capitalizeNames';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [['john', 'JACOB', 'jinGleHeimer', 'schmidt']],
        ['John', 'Jacob', 'Jingleheimer', 'Schmidt'],
        'capitalizeNames'
    );
})();

(function namesOnly() {
    const functionName = 'namesOnly';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [
            [
                {
                    name: 'Angelina Jolie',
                    age: 80,
                },
                {
                    name: 'Eric Jones',
                    age: 2,
                },
                {
                    name: 'Paris Hilton',
                    age: 5,
                },
                {
                    name: 'Kayne West',
                    age: 16,
                },
                {
                    name: 'Bob Ziroll',
                    age: 100,
                },
            ],
        ],
        [
            'Angelina Jolie',
            'Eric Jones',
            'Paris Hilton',
            'Kayne West',
            'Bob Ziroll',
        ],
        'namesOnly'
    );
})();

(function makeStrings() {
    const functionName = 'makeStrings';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [
            [
                {
                    name: 'Angelina Jolie',
                    age: 80,
                },
                {
                    name: 'Eric Jones',
                    age: 2,
                },
                {
                    name: 'Paris Hilton',
                    age: 5,
                },
                {
                    name: 'Kayne West',
                    age: 16,
                },
                {
                    name: 'Bob Ziroll',
                    age: 100,
                },
            ],
        ],
        [
            'Angelina Jolie can go to The Matrix',
            'Eric Jones is under age!!',
            'Paris Hilton is under age!!',
            'Kayne West is under age!!',
            'Bob Ziroll can go to The Matrix',
        ],
        'makeStrings'
    );
})();

(function total() {
    const functionName = 'total';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult($assertContainer, functionName, [[10, 20, 55]], 85, 'total');
})();

(function stringConcat() {
    const functionName = 'stringConcat';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [[10, 20, 55]],
        '102055',
        'stringConcat'
    );
})();

(function totalVotes() {
    const functionName = 'totalVotes';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [
            [
                { name: 'Bob', age: 30, voted: true },
                { name: 'Jake', age: 32, voted: true },
                { name: 'Kate', age: 25, voted: false },
                { name: 'Sam', age: 20, voted: false },
                { name: 'Phil', age: 21, voted: true },
                { name: 'Ed', age: 55, voted: true },
                { name: 'Tami', age: 54, voted: true },
                { name: 'Mary', age: 31, voted: false },
                { name: 'Becky', age: 43, voted: false },
                { name: 'Joey', age: 41, voted: true },
                { name: 'Jeff', age: 30, voted: true },
                { name: 'Zack', age: 19, voted: false },
            ],
        ],
        7,
        'totalVotes'
    );
})();

(function shoppingSpree() {
    const functionName = 'shoppingSpree';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [
            [
                { title: 'Tesla Model S', price: 90000 },
                { title: '4 carat diamond ring', price: 45000 },
                { title: 'Fancy hacky Sack', price: 5 },
                { title: 'Gold fidgit spinner', price: 2000 },
                { title: 'A second Tesla Model S', price: 90000 },
            ],
        ],
        227005,
        'shoppingSpree'
    );
})();

(function flatten() {
    const functionName = 'flatten';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [[['1', '2', '3'], [true], [4, 5, 6]]],
        ['1', '2', '3', true, 4, 5, 6],
        'flatten'
    );
})();

(function fiveAndGreaterOnly() {
    const functionName = 'fiveAndGreaterOnly';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [[3, 6, 8, 2]],
        [6, 8],
        'fiveAndGreaterOnly'
    );
})();

(function evensOnly() {
    const functionName = 'evensOnly';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [[3, 6, 8, 2]],
        [6, 8, 2],
        'evensOnly'
    );
})();

(function fiveCharactersOrFewerOnly() {
    const functionName = 'fiveCharactersOrFewerOnly';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [['dog', 'wolf', 'by', 'family', 'eaten', 'camping']],
        ['dog', 'wolf', 'by', 'eaten'],
        'fiveCharactersOrFewerOnly'
    );
})();

(function peopleWhoBelongToTheIlluminati() {
    const functionName = 'peopleWhoBelongToTheIlluminati';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [
            [
                { name: 'Angelina Jolie', member: true },
                { name: 'Eric Jones', member: false },
                { name: 'Paris Hilton', member: true },
                { name: 'Kayne West', member: false },
                { name: 'Bob Ziroll', member: true },
            ],
        ],
        [
            { name: 'Angelina Jolie', member: true },
            { name: 'Paris Hilton', member: true },
            { name: 'Bob Ziroll', member: true },
        ],
        'peopleWhoBelongToTheIlluminati'
    );
})();

(function ofAge() {
    const functionName = 'ofAge';
    const $assertContainer = document.querySelector(
        '#' + functionName + ' .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [
            [
                { name: 'Angelina Jolie', age: 80 },
                { name: 'Eric Jones', age: 2 },
                { name: 'Paris Hilton', age: 5 },
                { name: 'Kayne West', age: 16 },
                { name: 'Bob Ziroll', age: 100 },
            ],
        ],
        [
            { name: 'Angelina Jolie', age: 80 },
            { name: 'Bob Ziroll', age: 100 },
        ],
        'ofAge'
    );
})();
