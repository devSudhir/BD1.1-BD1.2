const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/shout', (req, res) => {
  const { name } = req.query;
  res.send(name.toUpperCase());
});

app.get('/fullname', (req, res) => {
  const { firstName, lastName } = req.query;
  res.send(`${firstName} ${lastName}`);
});

app.get('/date', (req, res) => {
  const { month, year } = req.query;
  res.send(`${month}, ${year}`);
});

app.get('/greet', (req, res) => {
  const { name } = req.query;
  res.send(`Namaste, ${name}!`);
});

app.get('/address', (req, res) => {
  const { street, city, state } = req.query;
  res.send(`${street}, ${city}, ${state}`);
});

app.get('/email', (req, res) => {
  const { userName, domain } = req.query;
  res.send(`${userName}@${domain}`);
});

app.get('/total-distance', (req, res) => {
  const { distance1, distance2 } = req.query;
  res.send(`Total Distance ${parseInt(distance1) + parseInt(distance2)}`);
});
app.get('/total-time', (req, res) => {
  const { time1, time2, time3 } = req.query;
  res.send(
    `Total time spent ${parseInt(time1) + parseInt(time2) + parseInt(time3)}`
  );
});

app.get('/average-speed', (req, res) => {
  const { totalDistance, totalTime } = req.query;
  res.send(
    `Average speed ${parseFloat(totalDistance) / parseFloat(totalTime)}`
  );
});

app.get('/eta', (req, res) => {
  const { distance, speed } = req.query;
  res.send(`ETA ${parseFloat(distance) / parseFloat(speed)}`);
});

app.get('/total-calories', (req, res) => {
  const { duration1, duration2, caloriesPerMinute } = req.query;
  res.send(
    `Total calories ${
      parseFloat(duration1) * parseFloat(caloriesPerMinute) +
      parseFloat(duration2) * parseFloat(caloriesPerMinute)
    }`
  );
});

app.get('/interest-earned', (req, res) => {
  const { principal, rate, time } = req.query;
  res.send(
    `Interest ${
      ((parseFloat(principal) * parseFloat(rate)) / 100) * parseFloat(time)
    }`
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
