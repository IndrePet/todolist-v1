import express from 'express';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();
  let day = '';

  switch (currentDay) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
  }

  res.render('list', { kindOfDay: day });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
