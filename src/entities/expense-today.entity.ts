import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { CategoryExpense } from './category-expense.entity'
import { Base } from './common'
import { User } from './user.entity'

@Entity()
export class ExpenseToday extends Base {
  constructor() {
    super()
  }
  @Column({ default: 0 })
  public total: number

  @Column()
  public detail: string

  @ManyToOne(() => CategoryExpense, (categoryExpense: CategoryExpense) => categoryExpense.expenseToday, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  public category: CategoryExpense

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  public user: User
}
