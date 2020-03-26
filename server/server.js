const express = require('express');

app.use(express);

app.get('/', (req, res) => {
  res.render('Hello World');
});

app.get('*', (req, res) => {
  res.status(404).send('404 error: Sorry, no page was found at that address');
});

module.exports = app;