import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common'
import { ExpenseService } from './expense.service'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { UpdateExpenseDto } from './dto/update-expense.dto'

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post('/create')
  create(@Body() createExpenseDto: CreateExpenseDto, @Req() user: any) {
    return this.expenseService.create(createExpenseDto, user.user['email'])
  }

  @Post('/category')
  creatCategory(@Body('title') title: string) {
    return this.expenseService.createCategory(title)
  }

  @Get()
  findAll(@Req() user: any) {
    return this.expenseService.findAll(user.user['email'])
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.expenseService.findExpenseWithCategory(+id)
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expenseService.update(+id, updateExpenseDto)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.expenseService.remove(+id)
  }
}
