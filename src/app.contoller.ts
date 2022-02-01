import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppContoller {
  @Get('/')
  test() {
    return 'test';
  }
}
