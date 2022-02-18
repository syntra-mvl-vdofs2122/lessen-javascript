// JSON

let anObject = {
    name: 'Korneel',
    age: 30,
    children: ['Joost', 'Jakob'],
    firstChild() {
        return this.children[0];
    },
};

let jsonObjectSelf = `{
    "name": "Ernest",
    "age": 24,
    "children": []
}`;

console.log(anObject);

let jsonObject = JSON.stringify(anObject);

console.log(jsonObject);

console.log(JSON.parse(jsonObject));

console.log(JSON.parse(jsonObjectSelf));
