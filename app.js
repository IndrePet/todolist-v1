import express from 'express';
import * as url from 'url';
import bodyParser from 'body-parser';

import { getDate } from './date.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const port = 3000;

const day = getDate();

const items = ['Buy food', 'Cook food', 'Eat food'];
const workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('list', { listTitle: day, newListItems: items });
});

app.post('/', (req, res) => {
  const item = req.body.newItem;
  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
  }

  res.redirect('/');
});

app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work', newListItems: workItems });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
