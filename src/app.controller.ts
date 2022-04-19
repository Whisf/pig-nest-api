import { Controller, Get, Req } from '@nestjs/common'
import { AppService } from './app.service'
import { Request } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/xinchao')
  getHello(@Req() request: Request): string {
    console.log(request['user'])
    return `Something else ${request['user'].email}`
  }
}
