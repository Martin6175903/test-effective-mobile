import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IsEnum, IsOptional, IsString } from 'class-validator'

export enum AppealStatus {
    Newest = 'Newest',
    AtWork = 'AtWork',
    Completed = 'Completed',
    Cancelled = 'Cancelled'
}

@Entity()
export class Appeal {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column({
        nullable: true
    })
    @IsOptional()
    @IsString({ message: 'Тема должна быть строкой!' })
    title: string

    @Column({
        nullable: true
    })
    @IsOptional()
    @IsString({ message: 'Описание должно быть строкой!' })
    description: string

    @Column({
        default: AppealStatus.Newest,
        enum: AppealStatus
    })
    @IsEnum(AppealStatus, {
        message: `Статус должен соответствовать одному из этих типов ${AppealStatus.Newest}, ${AppealStatus.AtWork}, ${AppealStatus.Completed}, ${AppealStatus.Cancelled}`
    })
    status: AppealStatus
}
