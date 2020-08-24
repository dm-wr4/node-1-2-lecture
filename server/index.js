const express = require('express')
const usersCtrl = require('./controllers/usersController')

const app = express()
const SERVER_PORT = 4000

app.use(express.json())

app.get('/test', (req, res) => {
  console.log('THIS IS A TEST')
  res.send('You did it!! Now try again!!!! :fireworks:')
})

app.get('/api/users', usersCtrl.getAllUsers)
app.get('/api/users/:id', usersCtrl.getUserById)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
