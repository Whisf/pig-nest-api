import { IsOptional, IsString, IsBoolean } from 'class-validator'

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  username: string

  @IsBoolean()
  @IsOptional()
  isAvaiable: boolean
}
