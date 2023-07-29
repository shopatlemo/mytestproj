// Imports
const express = require('express')
const app = express()
const port = 5000

// Static Files
// app.use(express.static('public'));
app.use(express.static('/'));
// // Specific folder example
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/img', express.static(__dirname + '/images'))
app.use('/html', express.static(__dirname + '/html'))

// Set View's
// app.set('views', './views');
// app.set('view engine', 'ejs');

// app.set('views', '/html');
// app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/views/about.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))