/*
На странице post-details.html:
7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
(ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)*/
const postId = new URL(location.href).searchParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((res) => res.json())
    .then((posts) => {
        const block = document.getElementsByClassName('wrap_list')[0];
        for (const post of posts) {

            const post_block = document.createElement('div');
            post_block.setAttribute('class', 'user');
            post_block.innerText = `title: ${post.title}`;
            block.appendChild(post_block);