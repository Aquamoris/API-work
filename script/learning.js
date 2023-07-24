const url = 'https://jsonplaceholder.typicode.com/todos/'

async function f1() {
    const response = await fetch(url + '1');
    return response.json();
        // .then(response => response.json())
        // .then(data => console.log(data))
}

async function f2() {
    const response = fetch(url + '2');
    return (await response).json();
}

async function f3() {
    const response = fetch(url + '3');
    return (await response).json()
}

async function go() {
    let a = await f1();
    console.log(a);

    let b = await f2();
    console.log(b);

    let c = await f3();
    console.log(c);
}

go();