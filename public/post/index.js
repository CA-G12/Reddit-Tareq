const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idParam = urlParams.get('id');
const posts = document.querySelector('.posts');
const usernameDiv = document.querySelector('.username');

// const { join } = require('path');

fetch(`/posts/${idParam}`, {
  method: 'GET',
})
  .then((res) => res.json())
  .then((result) => {
    if (result.message === 'Not Authorized') {
      window.location.href = '../errors/NotAuthorazied/notAuthoraized.html';
    } else {
      const onePost = document.createElement('div');
      onePost.setAttribute('class', 'onePost');

      const title = document.createElement('div');
      title.setAttribute('class', 'title');
      onePost.appendChild(title);

      const content = document.createElement('div');
      content.setAttribute('class', 'content');
      onePost.appendChild(content);

      const editPost = document.createElement('div');
      editPost.setAttribute('class', 'editPost');
      onePost.appendChild(editPost);

      const pOfContent = document.createElement('p');
      content.appendChild(pOfContent);
      pOfContent.textContent = ` ${result[0].content}`;

      const pOfTitle = document.createElement('p');
      title.appendChild(pOfTitle);
      pOfTitle.textContent = `${result[0].title}`;

      const suggestion = document.createElement('div');
      suggestion.setAttribute('class', 'suggestion');
      editPost.appendChild(suggestion);

      const goBack = document.createElement('a');
      goBack.textContent = 'Go Back';
      goBack.setAttribute('class', 'goBack');
      goBack.setAttribute('href', '/');
      onePost.appendChild(goBack);

      posts.appendChild(onePost);
    }
  });

// For Get User Name
fetch('/getUserName', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => res.json())
  .then((res) => {
    usernameDiv.style.display = 'flex';
    usernameDiv.textContent = res.username;
  });
