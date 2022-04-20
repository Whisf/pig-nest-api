import { BadRequestException, Injectable } from '@nestjs/common'
import { User } from 'src/entities'
import { Connection } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor(private connection: Connection) {}
  async create(createUserDto: CreateUserDto, email: string) {
    const { isAvaiable } = createUserDto
    const user = await this.connection.manager.findOne(User, { where: { email: email } })
    if (user) {
      throw new BadRequestException('User is already existed')
    }
    return await this.connection.manager.save(User, {
      username: createUserDto?.username,
      email: email,
      isAvaiable: isAvaiable,
    })
  }

  findAll(): Promise<User[]> {
    return this.connection.manager.find(User)
  }

  async findOne(id: number): Promise<User> {
    return await this.connection.manager.findOne(User, { where: { id: id } })
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.findOne(id)
    const { username, isAvaiable } = updateUserDto
    if (!existingUser) {
      throw new BadRequestException('This user is not existed')
    }

    return await this.connection.manager.save(User, {
      id: id,
      username: username ? username : existingUser.username,
      isAvaiable: isAvaiable ? isAvaiable : existingUser.isAvaiable,
    })
  }

  async remove(id: number) {
    const existingUser = await this.findOne(id)
    if (!existingUser) {
      throw new BadRequestException('Not found user')
    }
    return await this.connection.manager.delete(User, { id: id })
  }
}
