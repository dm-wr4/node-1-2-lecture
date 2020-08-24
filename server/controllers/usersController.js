const users = require('../data.json')

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
}
