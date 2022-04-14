import { Column, ManyToOne } from 'typeorm'
import { Base } from './common'
import { User } from './user.entity'

export class Task extends Base {
  constructor() {
    super()
  }
  @Column()
  public title: string

  @Column()
  public detailId: string

  // @ManyToOne(() => User, { onDelete: 'CASCADE' })
  // public user: User
}
