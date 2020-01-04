const express = require('express')
const rp = require('request-promise')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/:city', (req, res) => {
  rp({
    uri: 'http://apidev.accuweather.com/locations/v1/search',
    qs: {
      q: req.params.city,
      apiKey: 'api-key'
         // Use your accuweather API key here
    },
    json: true
  })
    .then((data) => {
      res.render('index', data)
    })
    .catch((err) => {
      console.log(err)
      res.render('error')
    })
})

app.listen(3000);

// const request = require('request-promise');

// const options = {
//     method: 'GET',
//     uri: 'https://risingstack.com'
//   }
  
//   request(options)
//     .then(function (response) {
//       // Request was successful, use the response object at will
//     })
//     .catch(function (err) {
//       // Something bad happened, handle the error
//     })
//--
// const options = {
//     method: 'POST',
//     uri: 'https://risingstack.com/login',
//     body: {
//       foo: 'bar'
//     },
//     json: true 
//       // JSON stringifies the body automatically
//   }
//   ​
//   request(options)
//     .then(function (response) {
//       // Handle the response
//     })
//     .catch(function (err) {
//       // Deal with the error
//     });
//--
// const options = {
//     method: 'GET',
//     uri: 'https://risingstack.com',
//     qs: {
//       limit: 10,
//       skip: 20,
//       sort: 'asc'
//     }
//   }
//--
// const options = {
//     method: 'GET',
//     uri: 'https://risingstack.com',
//     headers: {
//       'User-Agent': 'Request-Promise',
//       'Authorization': 'Basic QWxhZGRpbjpPcGVuU2VzYW1l'
//     }
//   }
  