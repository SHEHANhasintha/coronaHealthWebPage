var express = require('express');
const path = require('path');
var router = express.Router();


const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './client/build')));

// Put all API endpoints under '/api'
/*app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});*/

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
  console.log(path.join(__dirname+'/covidatlas/build/index.html'));
  res.sendFile(path.join(__dirname+'/covidatlas/build/index.html'));
  
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;