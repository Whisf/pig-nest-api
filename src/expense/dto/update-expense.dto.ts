import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateExpenseDto {
  @IsOptional()
  @IsString()
  category: string

  @IsOptional()
  @IsNumber()
  total: number

  @IsOptional()
  @IsString()
  detail: string
}
