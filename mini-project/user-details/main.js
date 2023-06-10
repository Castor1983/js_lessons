/*
На странице user-details.html:
4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
    6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
    котра має детальну інфу про поточний пост.*/
const userId = new URL(location.href).searchParams.get('userId');

fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
.then((res) => res.json())
.then((user) => {
    const block = document.getElementsByClassName('wrap_details')[0];
    const ul = document.createElement('ul');
    recursiveBuild(user, ul);
    block.appendChild(ul);
    const button = document.createElement('button');
    button.setAttribute('class', 'btn_info')
    button.innerText = 'post of current user';
    block.appendChild(button);
    button.onclick = () => {
        location.href = `../posts-list/index.html?userId=${user.id}`;
    }
    });

function liCreator(key, value, parent) {
    const li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);

}
function ulBuilder(key, object, parent) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`;
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuild(object, ul);

}

function recursiveBuild(object, parent) {
    for (const key in object) {
        typeof object[key] === 'object'
            ? ulBuilder(key, object[key], parent)
            : liCreator(key, object[key], parent)
    }
}
