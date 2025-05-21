import { Appeal } from '../entity/Appeal'
import { validate } from 'class-validator'

export const validateAppealData = async (dto: Appeal) => {
  const appeal = new Appeal()
  appeal.status = dto.status
  appeal.title = dto.title
  appeal.description = dto.description

  const isValidate = await validate(appeal)

  return isValidate.length === 0;
}