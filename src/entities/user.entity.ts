import { Column, Entity, OneToMany, Tree, TreeChildren, TreeParent } from 'typeorm'
import { Base } from './common/base'
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
  @Column()
  public username: string

  @Column()
  public isAvaiable: boolean

  @TreeParent({ onDelete: 'SET NULL' })
  public parent: User

  @TreeChildren()
  public children: User[]

  // @OneToMany(() => Task, (task: Task) => task.user, { onDelete: 'CASCADE' })
  // public task: Task[]
}
