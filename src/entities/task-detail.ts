import { Column, Entity, OneToOne } from 'typeorm'
import { Base } from './common'
import { Task } from './task.entity'

@Entity()
export class TaskDetail extends Base {
  @Column()
  public description: string

  @OneToOne(() => Task, { onDelete: 'CASCADE' })
  public task: Task
}
