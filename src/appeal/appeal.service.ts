import { Repository } from 'typeorm'
import { Appeal } from '../entity/Appeal'
import { IAppeal } from './interfaces/appeal.interface'

export class AppealService {
  constructor(private readonly appealRepository: Repository<Appeal>) {
  }

  async findAll(searchTermDate: Date | Date[]) {
    return this.appealRepository.find()
  }

  async findOne(id: string) {
    return this.appealRepository.findOne({ where: { id } })
  }

  async changeStatus(id: number, dto: Appeal) {
    return this.appealRepository.update(id, dto)
  }

  async create(dto: Appeal) {
    return this.appealRepository.create(dto)
  }


}