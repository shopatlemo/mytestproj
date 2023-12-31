// Imports
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// Static Files
app.use(express.static('public'));
var bodyParser = require('body-parser');

// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))
app.use('/html', express.static(__dirname + 'public/html'))

// Set View's
app.set('views', 'views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/views/about.html')
})

app.post('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.post('/',(req,res) => {
    res.send('POST request to the homepage')
})
app.post('/about', (req, res) => {
   res.sendFile(__dirname + '/views/about.html')
})
app.listen(port, () => console.info(`App listening on port ${port}`))