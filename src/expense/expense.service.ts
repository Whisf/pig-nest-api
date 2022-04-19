import { Injectable } from '@nestjs/common'
import { CategoryExpense, ExpenseToday } from 'src/entities'

import { Connection } from 'typeorm'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { UpdateExpenseDto } from './dto/update-expense.dto'

@Injectable()
export class ExpenseService {
  constructor(private connection: Connection) {}
  async create(createExpenseDto: CreateExpenseDto) {
    return await this.connection.transaction(async (manager) => {
      const { category, ...rest } = createExpenseDto
      let existingCategory = await manager.findOne(CategoryExpense, { where: { title: createExpenseDto.category } })
      if (!existingCategory) {
        existingCategory = await manager.save(CategoryExpense, { title: category })
      }
      return await manager.save(ExpenseToday, {
        ...rest,
        category: { id: existingCategory.id },
      })
    })
  }

  async findAll(): Promise<ExpenseToday[]> {
    const date = new Date()
    console.log(date)
    const existingExpense = await this.connection.manager.find(ExpenseToday, {
      where: {
        createAt: date,
      },
    })
    console.log(existingExpense)
    return this.connection.manager.find(ExpenseToday)
  }

  async findOne(id: number): Promise<any> {

    return this.connection.manager.createQueryBuilder()

    return await this.connection.manager
      .createQueryBuilder(ExpenseToday, 'ex')
      .innerJoinAndSelect('ex.category', 'category')
      .where('ex.id = :id', { id: id })
      .getOne()
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`
  }

  remove(id: number) {
    return `This action removes a #${id} expense`
  }
}
