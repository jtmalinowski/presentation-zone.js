const express = require('express');
const app = express();

const fetchFromDb = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // operational error
      reject({ much: { data: [1, 2, 3] } });

      // programmer error
      // throw new Error('Failed');
    });
  });
};

app.get('/', function (req, res) {
  fetchFromDb().then(data => {
    res.send(JSON.stringify(data));
  });
});

app.listen(3000);

// 1 / 3
