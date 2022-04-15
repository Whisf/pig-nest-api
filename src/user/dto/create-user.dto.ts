import { IsString, IsBoolean } from 'class-validator'

export class CreateUserDto {
  @IsString()
  username: string

  @IsBoolean()
  isAvaiable: boolean
}
