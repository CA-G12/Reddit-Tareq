const posts = document.querySelector('.posts');
const errorAddPost = document.querySelector('.error-addPost');
const addButton = document.querySelector('.addButton');
const titleInput = document.querySelector('#title');
const contentTextarea = document.querySelector('#content');
const loginBtn = document.querySelector('.loginBtn');
const signupBtn = document.querySelector('.signupBtn');
const logoutBtn = document.querySelector('.logoutBtn');
const usernameDiv = document.querySelector('.username');

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
    // To Delete Your Post
    deleteBtn.addEventListener('click', () => {
      fetch(`/posts/${element.id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.message === 'Unauthorized') {
            // eslint-disable-next-line no-alert
            alert('Please Signup First');
            window.location.assign('../signup/index.html');
          } else if (result.message === 'Not Authorized') {
            window.location.href = '../errors/NotAuthorazied/notAuthoraized.html'; // NotAuthorazied
          } else {
            // eslint-disable-next-line no-alert
            alert('Post Deleted Successfully');
            window.location.assign('/');
          }
        });
    });
    // To Show Your Post in New Page

    showBtn.addEventListener('click', () => {
      fetch(`posts/showPostPage/${element.id}`)
        .then((res) => res.json())
        .then((result) => {
          window.location.href = `${result.location}?id=${element.id}`;
        });
    });

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

  if (values.title.length === 0 || values.content.length === 0) {
    // eslint-disable-next-line no-alert
    alert('You Should Fill the inputs');
  } else {
    fetch('/posts', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })

      .then((res) => res.json())
      .then((res) => {
        if (res.message === 'Post Add Successfully') {
          // eslint-disable-next-line no-alert
          alert('Post Added Successfully');
          window.location.assign('/');
        } else {
          // eslint-disable-next-line no-alert
          alert('Please Signup First');
          window.location.assign('../signup/index.html');
        }
      })
      .then(() => {
        titleInput.value = '';
        contentTextarea.value = '';
      });
    renderPost();
  }
});

// For Get User Name
fetch('/getUserName', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => res.json())
  .then((res) => {
    if (res.message === 'User exists') {
      usernameDiv.style.display = 'flex';
      logoutBtn.style.display = 'flex';
      loginBtn.style.display = 'none';
      signupBtn.style.display = 'none';
      usernameDiv.textContent = res.username;
    } else {
      usernameDiv.style.display = 'none';
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
        usernameDiv.style.display = 'none';
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'flex';
        signupBtn.style.display = 'flex';
      }
    });
});
