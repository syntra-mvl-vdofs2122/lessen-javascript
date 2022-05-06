const $textArea = document.getElementById('todo-input');
const $saveBtn = document.getElementById('save-btn');
const $todoList = document.getElementById('todo-list');
const $todoCount = document.getElementById('todo-count');
const $doneList = document.getElementById('done-list');
const $doneCount = document.getElementById('done-count');
const $todoNextBtn = document.getElementById('todo-next-btn');
const $todoPreviousBtn = document.getElementById('todo-previous-btn');

const Limit = 6;

const state = {
    focusIndex: NaN,
    todoList: [],
    totalTodoItems: 0,
    doneList: [],
    todoOffset: 0,
};

function printTodoPagination() {
    $todoPreviousBtn.disabled = state.todoOffset === 0;
    $todoNextBtn.disabled = state.todoOffset >= state.totalTodoItems - Limit;
}

function printTodoList() {
    $todoList.innerHTML = '';

    let todoListHTML = state.todoList.map((todoItem) => {
        return `<div class="box ${
            todoItem.id === state.focusIndex ? 'active' : ''
        }" data-index="${todoItem.id}">
                  <p>${todoItem.description}</p>
                  <a class="done-btn fas fa-check-circle fa-2x"></a>
                </div>`;
    });

    $todoList.insertAdjacentHTML('beforeend', todoListHTML.join(''));
    $todoCount.innerText = state.totalTodoItems;
    printTodoPagination();
}

function printDoneList() {
    $doneList.innerHTML = '';
    let template = '';

    for (let i = 0; i < state.doneList.length; i++) {
        template += `<div class="box">
      <p>${state.doneList[i].description}</p>
      <a class="remove-btn fas fa-times-circle fa-2x" data-index="${state.doneList[i].id}"></a>
    </div>`;
    }

    $doneList.insertAdjacentHTML('beforeend', template);
    $doneCount.innerText = state.doneList.length;
}

function deleteDoneItem(id) {
    $doneList.classList.add('loading');
    return fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id,
        {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
            },
        },
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not delete todoItem');
            }

            return fetchDoneItems();
        })
        .catch((err) => {
            console.error(err);
        });
}

function patchTodoDone(id) {
    $todoList.classList.add('loading');

    return fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
            },
            body: '{"done":true}',
        },
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not patch todoItem');
            }

            return response.json();
        })
        .then((body) => {
            fetchTodoItems();
            fetchDoneItems();

            return body.data;
        })
        .catch((err) => {
            console.error(err);
        });
}

function postNewTodo(description) {
    let body = { description: description, done: false };
    $saveBtn.classList.add('is-loading');
    $todoList.classList.add('loading');
    $saveBtn.disable = true;

    return fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
            },
            body: JSON.stringify(body),
        },
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not post todoItem');
            }

            return response.json();
        })
        .then((body) => {
            fetchTodoItems();

            return body.data;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            $saveBtn.classList.remove('is-loading');
            $saveBtn.disable = true;
        });
}

function fetchTodoItems() {
    $todoList.classList.add('loading');

    let params = new URLSearchParams();
    params.append('filter[done][eq]', 0);
    params.append('sort', '-modified_on');
    params.append('limit', Limit);
    params.append('offset', state.todoOffset);
    params.append('meta', 'filter_count');

    return fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo?' +
            params.toString(),
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
            },
        },
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not fetch todoItem');
            }

            return response.json();
        })
        .then((body) => {
            state.todoList = body.data;
            state.totalTodoItems = body.meta.filter_count;
            printTodoList();
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            $todoList.classList.remove('loading');
        });
}

function fetchDoneItems() {
    $doneList.classList.add('loading');

    let params = new URLSearchParams();
    params.append('filter[done][eq]', 1);
    params.append('sort', '-modified_on');

    return fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo?' +
            params.toString(),
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
            },
        },
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not fetch doneItem');
            }

            return response.json();
        })
        .then((body) => {
            state.doneList = body.data;
            printDoneList();
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            $doneList.classList.remove('loading');
        });
}

function saveBtnClicked() {
    const todoText = $textArea.value;
    state.todoOffset = 0;

    postNewTodo(todoText);
}

function todoListClicked(event) {
    const $target = event.target;

    if ($target.matches('.done-btn')) {
        const curIndex = $target.closest('.box').dataset.index;

        patchTodoDone(curIndex);
        state.todoOffset = 0;
    }

    if ($target.matches('.box') || $target.matches('.box p')) {
        const curIndex = parseInt($target.closest('.box').dataset.index);
        state.focusIndex = curIndex === state.focusIndex ? NaN : curIndex;

        printTodoList();
    }
}

function doneListClicked(event) {
    const $target = event.target;

    if ($target.matches('.remove-btn')) {
        const curIndex = $target.dataset.index;

        deleteDoneItem(curIndex);
    }
}

function todoNextBtnClicked() {
    state.todoOffset += Limit;
    fetchTodoItems();
}

function tod0PreviousBtnClicked() {
    state.todoOffset -= Limit;
    fetchTodoItems();
}

$saveBtn.addEventListener('click', saveBtnClicked);
$todoList.addEventListener('click', todoListClicked);
$doneList.addEventListener('click', doneListClicked);
$todoNextBtn.addEventListener('click', todoNextBtnClicked);
$todoPreviousBtn.addEventListener('click', tod0PreviousBtnClicked);

fetchTodoItems();
fetchDoneItems();
