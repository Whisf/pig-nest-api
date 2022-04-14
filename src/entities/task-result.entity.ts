import { Column } from 'typeorm'
import { Base } from './common'

export enum TASK_STATUS {
  DONE = 'DONE',
  PENDING = 'PENDING',
  REJECT = 'REJECT',
}

export class TaskResult extends Base {
  @Column()
  public title: string

  @Column()
  public comment: string

  @Column()
  public status: TASK_STATUS
}
