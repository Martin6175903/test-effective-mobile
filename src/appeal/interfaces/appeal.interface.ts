import { AppealStatus } from '../../entity/Appeal'

export interface IAppeal {
  id: number
  title?: string
  description?: string
  status: AppealStatus
}

export interface ChangeStatusAppeal extends Omit<IAppeal, 'id'> {}