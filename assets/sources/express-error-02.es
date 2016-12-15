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

const safe500 = (fn) => {
  const originalPromise = Promise;

  const mountGlobals = (errorHandler) => {
    global.Promise = function (resolver) {
      let catchCalled = false;

      const resolveFn = () => {};
      const rejectFn = () => {
        if (!catchCalled) {
          setTimeout(() => {
            if (!catchCalled) {
              errorHandler();
            }
          });

          Promise((res, rej) => {rej(1)}).catch()
        }
      };

      resolver(resolveFn, rejectFn);

      return {
        then: () => {},
        catch: () => { catchCalled = true; }
      };
    };
  }

  const unmountGlobals = () => {
    global.Promise = originalPromise;
  };

  return (...args) => {
    mountGlobals(() => {
      const res = args[1];
      res.send({ result: 'error' });
    });
    const result = fn(...args);
    unmountGlobals();
    return result;
  };
};

app.get('/', safe500(function (req, res) {
  fetchFromDb().then(data => {
    res.send(JSON.stringify(data));
  });
}));

app.listen(3000);
