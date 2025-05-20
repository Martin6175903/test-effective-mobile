import { appealRepository } from '../repository'
import {Request, Response} from 'express'

export class AppealController {
  static async findAll(req: Request, res: Response) {
    const data = await appealRepository.findAll()
    return res.status(200).send(data)
  }

  static async findOne(req: Request, res: Response) {
    const data = await appealRepository.findOne(req.params.id)
    return res.send(data)
  }

  static async changeStatus(req: Request, res: Response) {
    const data = await appealRepository.changeStatus(req.params.id, req.body)
    return res.send(data)
  }

  static async create(req: Request, res: Response) {
    const data = await appealRepository.create(req.body)
    console.log(req.body)
    return res.status(201).send(data)
  }
}