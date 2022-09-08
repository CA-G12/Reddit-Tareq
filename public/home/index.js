const posts = document.querySelector('.posts');
fetch('/posts', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => res.json())
  // eslint-disable-next-line no-use-before-define
  .then((res) => displayPosts(res));

const displayPosts = (data) => {
  data.forEach((element) => {
    const onePost = document.createElement('div');
    onePost.setAttribute('class', 'onePost');

    const username = document.createElement('div');
    username.setAttribute('class', 'username');
    onePost.appendChild(username);

    const title = document.createElement('div');
    title.setAttribute('class', 'title');
    onePost.appendChild(title);

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    onePost.appendChild(content);

    const editPost = document.createElement('div');
    editPost.setAttribute('class', 'editPost');
    onePost.appendChild(editPost);

    const pOfUsername = document.createElement('p');
    username.appendChild(pOfUsername);
    pOfUsername.textContent = `Posted By : ${element.username}`;

    const pOfContent = document.createElement('p');
    content.appendChild(pOfContent);
    pOfContent.textContent = ` ${element.content}`;

    const pOfTitle = document.createElement('p');
    title.appendChild(pOfTitle);
    pOfTitle.textContent = `${element.title}`;

    const suggestion = document.createElement('div');
    suggestion.setAttribute('class', 'suggestion');
    editPost.appendChild(suggestion);

    const btns = document.createElement('div');
    btns.setAttribute('class', 'btns');
    suggestion.appendChild(btns);

    const deleteBtn = document.createElement('a');
    btns.appendChild(deleteBtn);
    deleteBtn.textContent = 'Delete Post';

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash';
    deleteBtn.appendChild(deleteIcon);

    const showBtn = document.createElement('a');
    btns.appendChild(showBtn);
    showBtn.textContent = 'Show Post';

    const showIcon = document.createElement('i');
    showIcon.className = 'fa-solid fa-trash';
    showBtn.appendChild(showIcon);

    posts.appendChild(onePost);
  });
};
