import { AppDataSource } from "./data-source"
import * as express from 'express'
import * as bodyParser from 'body-parser'

AppDataSource.initialize()
  .then(() => {
    const app = express()
    app.use(bodyParser.json())

    app.get("/", (req: express.Request, res: express.Response) => {
      res.send('Hello Node JS!')
    })

    app.listen(process.env.PORT || 5000)

    console.log(`App listening on http://localhost:${process.env.PORT || 5000}`)
  })
  .catch(error => console.log(error))
