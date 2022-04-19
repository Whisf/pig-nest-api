import { IsString, IsBoolean, IsEmail, IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @IsString()
  username: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsBoolean()
  isAvaiable: boolean
}
