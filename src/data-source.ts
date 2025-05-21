import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Appeal } from './appeal/entity/Appeal'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [Appeal],
  migrations: [],
  subscribers: []
})
