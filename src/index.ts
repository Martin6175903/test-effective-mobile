import { AppDataSource } from './data-source'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { appealRouter } from './routes/appeal.routes'

AppDataSource.initialize()
  .then(() => {
    const app = express()
    app.use(bodyParser.json())

    app.use('/api', appealRouter)

    app.listen(process.env.PORT || 5000)

    console.log(`App listening on http://localhost:${process.env.PORT || 5000}`)
  })
  .catch(error => console.log(error))
