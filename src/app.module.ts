import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppContoller } from './app.contoller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppContoller],
  providers: [],
})
export class AppModule {}
