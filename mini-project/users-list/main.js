/*В index.html
1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули*/
fetch('http://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        const block = document.getElementsByClassName('user_list')[0];
        for (const user of users) {

            const user_block = document.createElement('div');
            user_block.setAttribute('class', 'user');
            user_block.innerText = `id: ${user.id}  ${user.name}`;
            block.appendChild(user_block);

            const button = document.createElement('button');
            button.setAttribute('class', 'btn')
            button.innerText = 'more info';
            user_block.appendChild(button);

            button.onclick = () => {
                location.href = `../user-details/index.html?userId=${user.id}`;
            }
        }
    })


