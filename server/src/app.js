const express = require('express')
const path = require('path')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')

const app = express()

console.log('Environment:', process.env.NODE_ENV)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))

// Routes
app.use('/', routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send(`Error: ${err.message}`)
})

module.exports = app
