import { Column, Entity, OneToMany } from 'typeorm'
import { Base } from './common'
import { ExpenseToday } from './expense-today.entity'

@Entity()
export class CategoryExpense extends Base {
  @Column({ nullable: false })
  public title: string

  @OneToMany(() => ExpenseToday, (expenseToday: ExpenseToday) => expenseToday.category)
  public expenseToday: ExpenseToday[]
}
