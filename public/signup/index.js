const sumbitButton = document.querySelector('.submit');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorMessage = document.querySelector('#errors-message');
let inputError = [];
sumbitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (username.value.trim() === '') {
    inputError.push('Username is required');
  }
  if (email.value.trim() === '') {
    inputError.push('Email is required');
  } else if (!email.value.includes('@')) {
    inputError.push('Email is invalid');
  }
  if (
    !password.value.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    )
  ) {
    inputError.push(
      'Password must contain at least one number, one lowercase and one uppercase letter and one special charcater, and at least 8 characters long',
    );
  }
  while (errorMessage.firstChild) {
    errorMessage.removeChild(errorMessage.lastChild);
  }
  if (inputError.length !== 0) {
    inputError.forEach((e) => {
      const msg = document.createElement('h3');
      msg.textContent = e;
      errorMessage.appendChild(msg);
    });
    inputError = [];
    return;
  }
  const values = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  fetch('/signup', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message === 'User successfully signed up') {
        window.location.assign('/');
      } else {
        const msg = document.createElement('h3');
        msg.textContent = res.message;
        errorMessage.appendChild(msg);
      }
    });
});
