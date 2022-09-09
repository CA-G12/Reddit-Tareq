// import swal from 'sweetalert';

// const { post } = require('../../src/router/post');

const posts = document.querySelector('.posts');
const errorAddPost = document.querySelector('.error-addPost');
const addButton = document.querySelector('.addButton');
const titleInput = document.querySelector('#title');
const contentTextarea = document.querySelector('#content');
const loginBtn = document.querySelector('.loginBtn');
const signupBtn = document.querySelector('.signupBtn');
const logoutBtn = document.querySelector('.logoutBtn');
const username = document.querySelector('.username');

let inputError = [];

// For Render Posts To home Page (get all posts)
const renderPost = () => {
  fetch('/posts', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    // eslint-disable-next-line no-use-before-define
    .then((res) => displayPosts(res));
};
renderPost();

const displayPosts = (data) => {
  const user = data.user_id;
  console.log(data);
  posts.textContent = '';
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

    if (posts.id === username.id) {
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
      showIcon.className = 'fa-solid fa-hand-pointer';
      showBtn.appendChild(showIcon);
      if (posts.user_id === user) {
        deleteBtn.addEventListener('click', (ele) => {
          ele.preventDefault();
          fetch(`/posts/${posts.id}`, {
            method: 'delete',
          })
            .then((res) => res.json())
            .then(() => window.location.assign('/'));
        });
      }
    }

    posts.appendChild(onePost);
  });
};

// To Add a post

addButton.addEventListener('click', (ele) => {
  ele.preventDefault();
  if (titleInput.value.trim() === '') {
    inputError.push('Title is required !');
  }

  if (contentTextarea.value.trim() === '') {
    inputError.push('Content is required !');
  }
  while (errorAddPost.firstChild) {
    errorAddPost.removeChild(errorAddPost.lastChild);
  }

  if (inputError.length !== 0) {
    inputError.forEach((e) => {
      const msg = document.createElement('h3');
      msg.textContent = e;
      errorAddPost.appendChild(msg);
    });
    inputError = [];
  }

  const values = {
    title: titleInput.value,
    content: contentTextarea.value,
  };

  fetch('/posts', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })

    .then((res) => console.log('res', res))
    .then(() => {
      titleInput.value = '';
      contentTextarea.value = '';
    });
  renderPost();
});

// For Get User Name
fetch('/getUserName', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => res.json())
  .then((res) => {
    if (res.message === 'User exists') {
      username.style.display = 'flex';
      logoutBtn.style.display = 'flex';
      loginBtn.style.display = 'none';
      signupBtn.style.display = 'none';
      username.textContent = res.username;
    } else {
      username.style.display = 'none';
      logoutBtn.style.display = 'none';
      loginBtn.style.display = 'flex';
      signupBtn.style.display = 'flex';
    }
  });

// For Log Out
logoutBtn.addEventListener('click', () => {
  fetch('/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json)
    .then((res) => {
      if (res.message === 'log out success') {
        username.style.display = 'none';
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'flex';
        signupBtn.style.display = 'flex';
      }
    });
});
