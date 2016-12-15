require('zone.js')

const express = require('express');
const app = express();

const fetchFromDb = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ much: { data: [1, 2, 3] } });
      // throw new Error('Failed');
    });
  });
};

const zoneWrapper = (fn) => {
  return (...args) => {
    const res = args[1];

    Zone.current.fork({
      onHandleError: (_, __, ___, error) => {
        res.send(JSON.stringify({ result: 'error' }));
        return false;
      }
    }).run(() => {
      fn(...args);
    });
  };
};

app.get('/', zoneWrapper(function (req, res) {
  fetchFromDb().then(data => {
    res.send(JSON.stringify(data));
  });
}));

app.listen(3000);
