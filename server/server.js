import express from 'express';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import App from '../src/App';

const app = express();
const router = express.Router();

const PORT = 8000;


const serverRenderer = (req, res) => {
  fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    )
  });
};

router.use('^/$', serverRenderer);

router.use(
  express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' })
);

// tell the app to use the above rules
app.use(router);

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
})