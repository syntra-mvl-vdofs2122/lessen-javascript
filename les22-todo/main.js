feather.replace();

// Fase 1

// When form submit > add todo item
//   > only when textarea is not empty
// When check btn clicked > add done item and remove todo item
// When remove btn clicked > remove done item

// Implement API

// Fetch todo list and done list
// When form submit > POST todo item
//   > only when textarea is not empty
// When check btn clicked > PATCh todo item (set done = 1)
// When remove btn clicked > REMOVE todo item
// Every time a list changes fetch todo list and done list

function fetchTodoItems() {
    fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo?filter%5Bdone%5D%5Beq%5D=0&sort=-modified_on',
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
            },
        },
    )
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
}

function fetchDoneItems() {
    fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo?filter%5Bdone%5D%5Beq%5D=1&sort=-modified_on',
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
            },
        },
    )
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
}

function postTodoItem(text) {
    let body = {
        description: text,
        done: false,
    };

    fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
        },
        body: JSON.stringify(body),
    })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
}

function editTodoItem(id) {
    let body = { done: false };

    fetch(
        `https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/${id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
            },
            body: JSON.stringify(body),
        },
    )
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
}

function deleteTodoItem(id) {
    fetch(
        `https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/${id}`,
        {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ABcEHA2kcrKY4a6ipUA3',
            },
        },
    )
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
}
