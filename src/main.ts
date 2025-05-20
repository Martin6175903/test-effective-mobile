import express, { Application, Request, Response } from 'express'
import "reflect-metadata"

const app: Application = express()
const PORT = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!')
})

console.log()

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
