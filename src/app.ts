import express from 'express'
import router from './app/routes/api'

const app = express()
const SERVER_PORT: number = 3000

app.use(router)

app.listen(SERVER_PORT, () => {
  console.log(`Node js is listening to PORT: ${SERVER_PORT}`)
})
