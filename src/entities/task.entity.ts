import { Column, Entity, ManyToOne } from 'typeorm'
import { Base } from './common'
import { User } from './user.entity'

@Entity()
export class Task extends Base {
  constructor() {
    super()
  }
  @Column({ nullable: false })
  public title: string

  @Column()
  public detailId: string

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  public user: User
}
