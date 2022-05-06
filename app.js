import express from 'express';
import * as url from 'url';
import bodyParser from 'body-parser';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const port = 3000;

const items = ['Buy food', 'Cook food', 'Eat food'];

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  const day = today.toLocaleDateString('en-us', options);

  res.render('list', { kindOfDay: day, newListItems: items });
});

app.post('/', (req, res) => {
  const item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
