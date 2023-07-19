const requestURL = 'https://jsonplaceholder.typicode.com/comments';

let i = 0;
async function parseCommnents() {
    let data;
    await fetch(requestURL)
        .then(responce => responce.json())
        .then(json => data = json);

    console.log(data[i]);

    const ul = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.innerHTML = `${data[i].postId} ${data[i].id} ${data[i].email} ${data[i].name} ${data[i].body}`;

    ul.append(newLi);

    i++;
}

const button = document.querySelector('button');

button.addEventListener("click", parseCommnents);

// parseCommnents(requestURL);