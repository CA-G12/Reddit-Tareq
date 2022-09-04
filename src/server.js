const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log('This website is served on port', port);
});
