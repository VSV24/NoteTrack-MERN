import express from 'express'
import dotenv from 'dotenv'


dotenv.config()

const PORT = process.env.PORT || 5001
const app = express()


app.use(express.json()) // to use req.body
app.use(express.urlencoded({ extended: true }))




app.get('/api/notes', (req, res) => {
  res.send('show all notes')
})


app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})

