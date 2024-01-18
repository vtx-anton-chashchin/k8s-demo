import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const RANDOM_SERVICE_URL = process.env.RANDOM_SERVICE_URL!

const app = express()

app.use(morgan('tiny'))
app.use(cors())

app.get('/random', async (req, res) => {
  const response = await fetch(`${RANDOM_SERVICE_URL}/random`)
  const data = (await response.json()) as { value: number }
  res.send({ value: data.value })
})

const port = process.env.PORT ?? 80

app.listen(port, () => {
  console.log(`Listen on :${port}`)
})
