import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as dotevn from 'dotenv'
import * as os from 'os'

dotevn.config()
async function bootstrap() {
  console.log(os.cpus())
  console.log(os.networkInterfaces())
  console.log(os.userInfo())
  console.log(os.totalmem())
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
  })
}
bootstrap()
