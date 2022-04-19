import { Column, Entity, ManyToOne, OneToOne } from 'typeorm'
import { Base } from './common'
import { Task } from './task.entity'
import { User } from './user.entity'

export enum TASK_STATUS {
  DONE = 'DONE',
  PENDING = 'PENDING',
  REJECT = 'REJECT',
}

@Entity()
export class TaskResult extends Base {
  @Column()
  public title: string

  @Column()
  public comment: string

  @Column()
  public status: TASK_STATUS

  @OneToOne(() => Task, { onDelete: 'CASCADE' })
  public task: Task

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  public user: User
}
