import { Column, Entity, ManyToOne } from 'typeorm'
import { Base } from './common'
import { User } from './user.entity'

@Entity()
export class ExpenseMonthly extends Base {
  constructor() {
    super()
  }
  @Column()
  public daily_expense: number

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  public user: User
}
