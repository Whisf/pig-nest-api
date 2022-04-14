import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

export class Base {
  @PrimaryGeneratedColumn()
  public id: string

  @CreateDateColumn({ type: 'timestamp' })
  public createAt: Date

  @CreateDateColumn({ type: 'timestamp' })
  public updateAt: Date
}
