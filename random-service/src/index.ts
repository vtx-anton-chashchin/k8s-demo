import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(morgan('tiny'))
app.use(cors())

app.get('/random', (req, res) => {
  const min = 0
  const max = 100
  const value = Math.floor(Math.random() * (max - min + 1)) + min
  res.send({ value })
})

const port = process.env.PORT ?? 80

app.listen(port, () => {
  console.log(`Listen on :${port}`)
})
