import { Repository } from 'typeorm'
import { Appeal } from '../entity/Appeal'

export class AppealService {
  constructor(private readonly appealRepository: Repository<Appeal>) {
  }

  async findAll() {
    return this.appealRepository.find()
  }

  async findOne(id: string) {
    return this.appealRepository.findOne({ where: { id } })
  }

  async changeStatus(id: string, dto: Appeal) {
    const appeal = await this.appealRepository.findOne({ where: { id } })
    if (appeal) {
      this.appealRepository.merge(appeal, dto)
      await this.appealRepository.save(appeal)
      return appeal
    } else {
      return { message: 'Appeal not found' }
    }
  }

  async create(dto: Appeal) {
    const appeal = this.appealRepository.create(dto)
    await this.appealRepository.save(appeal)
    return appeal
  }
}