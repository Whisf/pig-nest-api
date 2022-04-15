import { Injectable } from '@nestjs/common'
import { ExpenseToday } from 'src/entities'
import { Connection } from 'typeorm'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { UpdateExpenseDto } from './dto/update-expense.dto'

@Injectable()
export class ExpenseService {
  constructor(private connection: Connection) {}
  create(createExpenseDto: CreateExpenseDto) {
    return `This action creates new expense`
  }

  findAll(): Promise<ExpenseToday[]> {
    return this.connection.manager.find(ExpenseToday)
  }

  findOne(id: number): Promise<ExpenseToday> {
    return this.connection.manager.findOne(ExpenseToday, { where: { id: id } })
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`
  }

  remove(id: number) {
    return `This action removes a #${id} expense`
  }
}
