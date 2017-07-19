// Start our app
const app = require('./src/app')

app.set('port', process.env.PORT || 7777)
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
})
