import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { Module } from './.module';
import { UserModule } from './user/user.module';
import { Module } from './.module';

@Module({
  imports: [Module, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
