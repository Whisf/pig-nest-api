import { BadRequestException, Injectable } from '@nestjs/common'
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
    return this.connection.manager.find(ExpenseToday)
  }

  async findExpenseWithCategory(id: number): Promise<any> {
    return await this.connection.manager
      .createQueryBuilder(ExpenseToday, 'ex')
      .innerJoinAndSelect('ex.category', 'category')
      .where('ex.id = :id', { id: id })
      .getOne()
  }

  findOne(id: number): Promise<ExpenseToday> {
    return this.connection.manager.findOneOrFail(ExpenseToday, { where: { id: id } })
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return this.connection.transaction(async (manager) => {
      const { category, detail, total } = updateExpenseDto
      const existingExpense = await this.findOne(id)
      if (!existingExpense) {
        throw new BadRequestException('Not found Expense')
      }

      if (category) {
        const existingCategory = await manager.findOne(CategoryExpense, { where: { title: category } })
        if (!existingCategory) {
          throw new BadRequestException(`Not Found Category ${category}`)
        }
        await manager.save(CategoryExpense, { id: id, category: { id: existingCategory.id } })
      }

      if (detail) {
        await manager.save(CategoryExpense, { id: id, detail: detail })
      }

      if (total) {
        await manager.save(CategoryExpense, { id: id, total: total })
      }

      return existingExpense
    })
  }

  remove(id: number) {
    return this.connection.manager.delete(ExpenseToday, id)
  }

  async createCategory(categoryTitle: string): Promise<CategoryExpense> {
    const existingCategory = await this.connection.manager.findOne(CategoryExpense, { where: { title: categoryTitle } })
    if (!!existingCategory) {
      throw new BadRequestException('Category is existed!')
    }
    return this.connection.manager.save(CategoryExpense, { title: categoryTitle })
  }
}
