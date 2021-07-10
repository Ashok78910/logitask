const bcrypt = require('bcrypt')
const users = [
  {
    name: 'ashok',
    email: 'ashok@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'manish',
    email: 'manish@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

module.exports = users