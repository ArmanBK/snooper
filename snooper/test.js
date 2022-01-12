console.log("nodejs works");

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
async function run() {
    const status = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
    )
        .then(response => response.json())
        .then(res => res);
    console.log(status, 'Complete!');
}
run();