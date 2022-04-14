import { Column, OneToOne } from 'typeorm'
import { Base } from './common'
import { Task } from './task.entity'

export class TaskDetail extends Base {
  @Column()
  public description: string

  @OneToOne(() => Task, { onDelete: 'CASCADE' })
  public task: Task
}
