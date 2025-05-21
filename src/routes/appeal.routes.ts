import { Request, Response, Router } from 'express'
import { AppealController } from '../appeal/appeal.controller'

export const appealRouter = Router()

appealRouter.get('/appeal', (req: Request, res: Response, next) => {
  AppealController.findAll(req, res)
    .then(() => next())
    .catch(next)
})
appealRouter.get(
  '/appeal/by-date/date',
  (req: Request, res: Response, next) => {
    AppealController.findWithRange(req, res)
      .then(() => next())
      .catch(next)
  }
)
appealRouter.get('/appeal/:id', (req: Request, res: Response, next) => {
  AppealController.findOne(req, res)
    .then(() => next())
    .catch(next)
})
appealRouter.post('/appeal/:id', (req: Request, res: Response, next) => {
  AppealController.changeStatus(req, res)
    .then(() => next())
    .catch(next)
})
appealRouter.patch(
  '/appeal/cancel-work',
  (req: Request, res: Response, next) => {
    AppealController.changeStatusOfSeveral(req, res)
      .then(() => next())
      .catch(next)
  }
)
appealRouter.post('/appeal', (req: Request, res: Response, next) => {
  AppealController.create(req, res)
    .then(() => next())
    .catch(next)
})
