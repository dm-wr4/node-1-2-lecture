const users = require('../data.json')

let newId = users[users.length - 1].id + 1

module.exports = {
  getAllUsers: (req, res) => {
    const { email } = req.query

    if (!email) {
      return res.status(200).send(users)
    }

    const filteredUsers = users.filter((element) => {
      return element.email.includes(email)
    })

    res.status(200).send(filteredUsers)
  },
  getUserById: (req, res) => {
    const { id } = req.params

    const user = users.find((element) => element.id === +id)

    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send('User not found.')
    }
  },
  addUser: (req, res) => {
    console.log(req.body)
    const { first_name, last_name, email } = req.body

    const newUser = {
      id: newId,
      first_name,
      last_name,
      email,
    }

    users.push(newUser)

    newId++

    res.status(200).send(users)
  },
  editUser: (req, res) => {
    const { id } = req.params
    const { first_name, last_name, email } = req.body

    const index = users.findIndex((element) => element.id === +id)

    if (index === -1) {
      return res.status(404).send('User not found')
    }

    const existingUser = users[index]

    const modifiedUser = {
      id: existingUser.id,
      first_name: first_name || existingUser.first_name,
      last_name: last_name || existingUser.last_name,
      email: email || existingUser.email,
    }

    users[index] = modifiedUser

    res.status(200).send(users)
  },
  deleteUser: (req, res) => {
    const { id } = req.params

    const index = users.findIndex((element) => element.id === +id)

    if (index === -1) {
      return res.status(404).send('User not found')
    }

    users.splice(index, 1)

    res.status(200).send(users)
  },
}
