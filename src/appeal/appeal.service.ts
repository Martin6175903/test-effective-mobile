import { Repository } from 'typeorm'
import { Appeal, AppealStatus } from '../entity/Appeal'

export class AppealService {
  constructor(private readonly appealRepository: Repository<Appeal>) {
  }

  async findAll() {
    return this.appealRepository.find()
  }

  async findWithRange(date: Date | Date[]) {
    const appeals = await this.appealRepository.find()
    // Если передаётся конкретная дата
    if (typeof date === 'string') {
      return appeals.filter(appeal => {
        const transDate = new Date(date)
        const dbDate = new Date(appeal.created_at)

        return transDate.getDate() === dbDate.getDate() && transDate.getMonth() === dbDate.getMonth() && transDate.getFullYear() === dbDate.getFullYear()
      })
    }
    // Если диапазон
    return appeals.filter(appeal => {
      // setHours для того, чтобы не было сравнение со временем во дне, то есть мы просто берём число, месяц и год, не углубляясь в часовые рамки
      const transDate1 = new Date(date[0]).setHours(0,0,0,0)
      const transDate2 = new Date(date[1]).setHours(0,0,0,0)
      const dbDate = new Date(appeal.created_at).setHours(0,0,0,0)

      return dbDate >= transDate1 && dbDate <= transDate2
    })
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

  async changeStatusOfSeveral() {
    return await this.appealRepository.update({ status: AppealStatus.AtWork }, { status: AppealStatus.Cancelled })
  }

  async create(dto: Appeal) {
    const appeal = this.appealRepository.create(dto)
    await this.appealRepository.save(appeal)
    return appeal
  }
}