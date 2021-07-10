const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./data/user')
const content = require('./data/content')
const User = require('./models/userModel')
const Content = require('./models/contentModel')
const connectDB = require('./models/db')
const e = require('express')

dotenv.config()

connectDB()
const importData = async () => {
  try {
    await Content.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    console.log(createdUsers)
    const sampleContent = content.map((con) => {
      return { ...con}
    })
    await Content.insertMany(sampleContent)
    console.log(sampleContent)
    process.exit()
  } catch (err) {
      console.log(err)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    
    await Content.deleteMany()
    await User.deleteMany()

    console.log('data destroyed'.red)
    process.exit()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}