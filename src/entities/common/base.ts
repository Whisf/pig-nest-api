import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export class Base {
  @PrimaryGeneratedColumn()
  public id: number

  @CreateDateColumn()
  public createAt: Date

  @UpdateDateColumn()
  public updateAt: Date
}
