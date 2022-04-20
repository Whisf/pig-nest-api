import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthMiddleware } from './auth/auth.middleware'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database'
import { UserModule } from './user/user.module'
import { TaskModule } from './task/task.module'
import { ExpenseModule } from './expense/expense.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([]),
    DatabaseModule,
    UserModule,
    TaskModule,
    ExpenseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    })
  }
}
