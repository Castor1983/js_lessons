const userId = new URL(location.href).searchParams.get('userId');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((res) => res.json())
    .then((posts) => {
        const block = document.getElementsByClassName('wrap_list')[0];
        for (const post of posts) {

            const post_block = document.createElement('div');
            post_block.setAttribute('class', 'user');
            post_block.innerText = `title: ${post.title}`;
            block.appendChild(post_block);

            const button = document.createElement('button');
            button.setAttribute('class', 'btn_info')
            button.innerText = 'more';
            post_block.appendChild(button);

            button.onclick = () => {
                location.href = `../post-details/index.html?postId=${post.id}`;
            }
        }
    })