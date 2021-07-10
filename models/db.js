const mongoose =  require('mongoose');
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology:true
      })
      console.log('MongoDB Connected')
    } catch (error) {
      console.log(error)
    }
  }
  
  module.exports = connectDB