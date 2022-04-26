import { Controller, Get, Req, Res, Sse } from '@nestjs/common'
import { AppService } from './app.service'
import { Request, Response } from 'express'
import { interval, map, Observable } from 'rxjs'
import { readFileSync } from 'fs'
import { join } from 'path'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/xinchao')
  getHello(@Req() request: Request): string {
    console.log(interval())
    console.log(request['user'])
    return `Something else ${request['user'].email}`
  }

  @Get()
  index(@Res() response: Response) {
    return response.type('text/html').send(readFileSync(join('./src/index.html')).toString())
  }

  @Sse('/sse')
  sse(): Observable<any> {
    return interval().pipe(map((_) => ({ data: { hello: 'fu*king world' } })))
  }
}
