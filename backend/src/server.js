import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import rateLimiter from '../middleware/rateLimiter.js'


dotenv.config()

const PORT = process.env.PORT || 5001
const app = express()
const __dirname = path.resolve()

//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json()) // to use req.body
app.use(express.urlencoded({extended:true}))
app.use(rateLimiter)


// app.use((req,res,next)=>{
  //   console.log('i am middleware')
  //   next()
  // })
  
app.use('/api/notes',notesRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
  
connectDB().then(()=>{
  app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`)
  })
})

//mongodb+srv://pokalavinay2_db_user:A2UA0tpIKQrCz3Ml@cluster0.tkjww8z.mongodb.net/?appName=Cluster0