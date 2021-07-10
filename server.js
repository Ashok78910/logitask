const path =   require('path');
const dotenv = require('dotenv')
const express =  require('express');
var bodyParser = require('body-parser')
const connectDB = require('./models/db');
const contentRoutes = require('./routes/contentRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const userRoutes = require('./routes/userRoutes')
const {notFound,errorHandler} =  require('./middleware/errorMiddleware')

dotenv.config()
connectDB()


const app =  express();
app.use(bodyParser.json())




app.get('/',(req,res) =>{
  res.send('api is runnig');
})

app.use('/api/contents',contentRoutes)
app.use('/api/users',userRoutes)
app.use('/api/upload',uploadRoutes)

app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(
    PORT,
    console.log(
      `Server runnig on port ${PORT}`
    )
  )