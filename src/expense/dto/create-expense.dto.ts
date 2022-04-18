import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  public category: string

  @IsNumber()
  @IsNotEmpty()
  public total: number

  @IsString()
  public detail: string
}
