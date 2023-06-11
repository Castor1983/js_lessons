/*
На странице post-details.html:
7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
(ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)*/
const postId = new URL(location.href).searchParams.get('postId');
const userId = new URL(location.href).searchParams.get('userId');

const block = document.getElementsByClassName('post_details')[0];
const h1 = document.getElementsByClassName('line')[0];
h1.innerHTML = `Post ${postId} info`;
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((res) => res.json())
    .then((posts) => {
        const post_block = document.createElement('div');
        post_block.setAttribute('class', 'post_info');
        for (const post of posts) {
            if (post.id == postId) {
                const ul = document.createElement('ul');
                post_block.appendChild(ul);
                for (const postKey in post) {
                    const li = document.createElement('li');
                    ul.appendChild(li);
                    li.innerText = `${postKey}: ${post[postKey]}`;
                }
            }

        }
        block.appendChild(post_block);
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((res) => res.json())
    .then((comments) => {

        const comments_block = document.createElement('div');
        comments_block.setAttribute('class', 'comments');
        for (const comment of comments) {
            const ul = document.createElement('ul');
            ul.setAttribute('class', 'comment_block')
            comments_block.appendChild(ul);
            for (const commentKey in comment) {
                const li = document.createElement('li');
                ul.appendChild(li);
                li.innerText = `${commentKey}: ${comment[commentKey]}`;
            }


        }
        block.appendChild(comments_block);
    });