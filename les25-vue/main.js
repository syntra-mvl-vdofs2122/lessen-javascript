let $container = document.getElementById('container');

let $otherBtn = document.getElementById('other');

$container.addEventListener('click', function (e) {
    console.log('container');
    console.log(e.target);
});

$otherBtn.addEventListener('click', function (e) {
    console.log('other');
    console.log(e.target);
});
