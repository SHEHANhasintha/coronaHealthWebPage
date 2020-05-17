var express = require('express');
const path = require('path');
var router = express.Router();

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/covidatlas/build/index.html'));
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;