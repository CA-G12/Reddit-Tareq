const loginBtn = document.querySelector('.submit');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorMessage = document.querySelector('#errors-message');

let inputError = [];

loginBtn.addEventListener('click', (ele) => {
  ele.preventDefault();
  if (email.value.trim() === '') {
    inputError.push('Email is required');
  } else if (!email.value.includes('@')) {
    inputError.push('Email is invalid');
  }
  if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
    inputError.push(
      'Password must contain (number, lowercase , uppercase , special charcater,  at least 8 char)',
    );
  }
  while (errorMessage.firstChild) {
    errorMessage.removeChild(errorMessage.lastChild);
  }
  if (inputError.length !== 0) {
    inputError.forEach((ele) => {
      const msg = document.createElement('h3');
      msg.textContent = ele;
      errorMessage.appendChild(msg);
    });
    inputError = [];
    return;
  }
  const values = {
    email: email.value,
    password: password.value,
  };
  fetch('/login', {
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
