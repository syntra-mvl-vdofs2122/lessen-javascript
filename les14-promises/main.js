let firstPromise = new Promise(function (resolve, reject) {
    let $resolveBtn1 = document.getElementById('resolve-1');
    let $rejectBtn1 = document.getElementById('reject-1');

    $resolveBtn1.addEventListener('click', resolve);
    $rejectBtn1.addEventListener('click', reject);
});

function resolveWait(result, ms) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, ms);
    });
}

function rejectWait(error, ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(error);
        }, ms);
    });
}

console.log(firstPromise);

// consumers

function promiseTest() {
    let test = firstPromise
        .finally(function () {
            console.log('promise done');
        })
        .then(
            function (result) {
                console.log('resolved');
                console.log(result);

                return resolveWait('promise two', 1500);
            },
            // function (error) {
            //     console.log('rejected');
            //     console.log(error);
            // },
        )
        .then(function (result) {
            console.log(result);

            return resolveWait('promise three', 1000);
        })
        .then(function (result) {
            console.log(result);
            return 'no promise';

            // return new Promise(function(resolve) {
            //     resolve('no promise');
            // })
        })
        .then(function (result) {
            console.log(result);
            return 'latest promise';
        })
        .catch(function (error) {
            console.log('rejected');
            console.error(error);
        });

    console.log(test);

    return test;
}

promiseTest().then(function (result) {
    console.log(result);
});

// resolveWait('error test 1', 1000)
//     .then(function (result) {
//         console.log(result);
//         return rejectWait('error test 2', 1000);
//     })
//     .then(function (result) {
//         console.log('inbetween');
//     })
//     .catch(function (error) {
//         console.error(error);
//         return 'continue';
//     })
//     .then(function (result) {
//         console.log(result);
//         return 'test';
//     })
//     .catch(function (error) {
//         console.error(error);
//     });

// static methods

let promiseOne = rejectWait('1', 1000);
let promiseTwo = rejectWait('2', 700);
let promiseThree = rejectWait('3', 2000);
let promiseFour = rejectWait('4', 1800);

// Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour])
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });
//
// Promise.allSettled([promiseOne, promiseTwo, promiseThree, promiseFour])
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });

// Promise.race([promiseOne, promiseTwo, promiseThree, promiseFour])
//     .then(function (result) {
//         console.log('Promise.race');
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.log('Promise.race');
//         console.error(error);
//     });

Promise.any([promiseOne, promiseTwo, promiseThree, promiseFour])
    .then(function (result) {
        console.log('Promise.any');
        console.log(result);
    })
    .catch(function (error) {
        console.log('Promise.any');
        console.error(error);
    });

// console.log(Promise.resolve('test'));
//
// console.log(Promise.reject('error'));
