import { AppealService } from '../appeal/appeal.service'
import { AppDataSource } from '../data-source'
import { Appeal } from '../entity/Appeal'

export const appealRepository = new AppealService(
  AppDataSource.getRepository(Appeal)
)