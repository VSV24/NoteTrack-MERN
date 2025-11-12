import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import rateLimiter from '../middleware/rateLimiter.js'


dotenv.config()

const PORT = process.env.PORT || 5001
const app = express()


//middleware
app.use(
  cors({
    origin:"http://localhost:5173"
  })
)
app.use(express.json()) // to use req.body
app.use(express.urlencoded({extended:true}))
app.use(rateLimiter)


// app.use((req,res,next)=>{
  //   console.log('i am middleware')
  //   next()
  // })
  
app.use('/api/notes',notesRoutes)
  
connectDB().then(()=>{
  app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`)
  })
})

//mongodb+srv://pokalavinay2_db_user:A2UA0tpIKQrCz3Ml@cluster0.tkjww8z.mongodb.net/?appName=Cluster0