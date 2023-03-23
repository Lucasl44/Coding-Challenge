const express = require('express');
const path = require('path');

const app = express();
const port = 9876;

app.use(express.static(path.join('dist', 'frontend')))
app.use('/path', (req, res) => {
  res.send('This shows on the path');
});

app.listen(port, () => {
  console.log('server listening on', port);
});
