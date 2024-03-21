import express from 'express';
// import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom'; 
// import path from 'path';
import App from '../src/App';

const app = express();
// const router = express.Router();

const PORT = 8000;

// Serve static assets
app.use(express.static('../src/assets'));

// Route handler for server-side rendering
app.get('*', (req, res) => {
  const context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  // Check if any of the routes matched the request URL
  const match = routes.find((route) => matchPath(req.url, route));

  // If a route matched, set the status code to 200
  if (match) {
    res.status(200);
  }

  // Send the HTML string to the client
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/umeew.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap"
          rel="stylesheet"
        />
        <title>UMEEW</title>
      </head>
      <body class="font-outfit">
        <div id="root">${html}</div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  `);
});

// const serverRenderer = (req, res) => {
//   fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return res.status(500).send('An error occurred');
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
//       )
//     )
//   });
// };

// router.use('^/$', serverRenderer);

// router.use(
//   express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' })
// );

// // tell the app to use the above rules
// app.use(router);

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
})