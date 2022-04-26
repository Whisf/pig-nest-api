import { Column, Entity, OneToMany, Tree, TreeChildren, TreeParent } from 'typeorm'
import { Base } from './common/base'
import { ExpenseMonthly } from './expense-monthly.entity'
import { ExpenseToday } from './expense-today.entity'
import { TaskResult } from './task-result.entity'
import { Task } from './task.entity'

@Entity('user')
@Tree('closure-table', {
  closureTableName: 'user',
  ancestorColumnName: (Column) => 'acestor' + Column.propertyName,
  descendantColumnName: (Column) => 'descendant' + Column.propertyName,
})
export class User extends Base {
  constructor() {
    super()
  }
  @Column({ nullable: true })
  public username: string

  @Column({ nullable: false })
  public email: string

  @Column({ default: true })
  public isAvaiable: boolean

  // @Column('enum')
  // public role: 'ADMIN' | 'User'

  @TreeParent({ onDelete: 'SET NULL' })
  public parent: User

  @TreeChildren()
  public children: User[]

  @OneToMany(() => Task, (task: Task) => task.user)
  public task: Task[]

  @OneToMany(() => TaskResult, (taskResult: TaskResult) => taskResult.user)
  public taskResult: TaskResult[]

  @OneToMany(() => ExpenseToday, (expenseToday: ExpenseToday) => expenseToday.user)
  public expenseToday: ExpenseToday

  @OneToMany(() => ExpenseMonthly, (expenseMonthly: ExpenseMonthly) => expenseMonthly.user)
  public expenseMonthly: ExpenseMonthly
}
