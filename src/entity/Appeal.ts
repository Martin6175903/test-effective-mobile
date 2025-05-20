import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

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
    title: string

    @Column({
        nullable: true
    })
    description: string

    @Column({
        default: AppealStatus.Newest,
        enum: AppealStatus
    })
    status: string

}
