import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator'
import { AppealStatus } from '../../entity/Appeal'

export class AppealDto {
  id: string
  created_at: Date
  updatedAt: Date

  @IsOptional()
  @IsString({ message: 'Тема должна быть строкой!' })
  title: string

  @IsOptional()
  @IsString({ message: 'Описание должно быть строкой!' })
  description: string

  @IsEnum(AppealStatus, {
    message: `Статус должен соответствовать одному из этих типов ${AppealStatus.Newest}, ${AppealStatus.AtWork}, ${AppealStatus.Completed}, ${AppealStatus.Cancelled}`
  })
  status: AppealStatus
}

export class RangeDate {
  @IsDate({each: true})
  date: Date | Date[]
}