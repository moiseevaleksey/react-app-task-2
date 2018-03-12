import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import App from 'components/App/App';
import path from 'path';
import { createStore } from 'redux';
import { combinedReducer } from './config/store';
import { Provider } from 'react-redux';

const app = express();

const manifest = JSON.parse(fs.readFileSync(path.resolve('./dist/manifest.json'), 'utf8'));

app.use(express.static('dist'));

const context = {};

app.get('*', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  const store = createStore(combinedReducer);
  const renderedHTML = `
    <!DOCTYPE html>
      <head>
        <meta charset="utf-8" />
        <title>FrontCamp3</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossorigin="anonymous" />
        <link rel="stylesheet" href="/style.css" />
      </head>
    <body>
    <div id="app">${renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
    )}</div>
    </body>
    <script src="./${manifest['vendor.js']}"></script>
    <script src="./${manifest['main.js']}"></script>
    </html>`
  ;
  res.send(renderedHTML);
});

app.listen(8000, () => console.log('Listening on port 8000'));
