const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + '/public'));


console.log("server runs at ", PORT);

app.get('/home', (req, res) => {
	console.log("got it");
  res.sendFile(path.resolve(__dirname + '/public/dist/index.html'))
})
app.listen(PORT);