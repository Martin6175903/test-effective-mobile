import { appealRepository } from '../repository'
import {Request, Response} from 'express'
import { validate } from 'class-validator'
import { Appeal } from '../entity/Appeal'
import { validateAppealData } from '../utils/validate-appeal-data'
import { RangeDate } from './dto/appeal.dto'

export class AppealController {
  static async findAll(req: Request, res: Response) {
    const data = await appealRepository.findAll()
    return res.status(200).send(data)
  }

  static async findWithRange(req: Request, res: Response) {
    // const date = new RangeDate()
    // date.date = req.body.date
    // const isValidate = await validate(date)
    // if (isValidate.length !== 0) throw new Error('Data is invalid')

    const data = await appealRepository.findWithRange(req.body.date)
    return res.status(200).send(data)
  }

  static async findOne(req: Request, res: Response) {
    const data = await appealRepository.findOne(req.params.id)
    return res.send(data)
  }

  static async changeStatus(req: Request, res: Response) {
    const isValidate = await validateAppealData(req.body)

    if(!isValidate) throw new Error('Data not valid')

    const data = await appealRepository.changeStatus(req.params.id, req.body)

    return res.send(data)
  }

  static async changeStatusOfSeveral(req: Request, res: Response) {
    const data = await appealRepository.changeStatusOfSeveral()
    return res.send(data)
  }

  static async create(req: Request, res: Response) {
    const isValidate = await validateAppealData(req.body)

    if(!isValidate) throw new Error('Data not valid')

    const data = await appealRepository.create(req.body)

    return res.status(201).send(data)
  }
}