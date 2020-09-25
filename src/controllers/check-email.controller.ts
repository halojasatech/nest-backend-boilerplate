import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { CheckEmailService } from '../services/check-email.service';

@Controller()
export class AuthController {
  constructor(private readonly checkEmailService: CheckEmailService) {}

  @Post('/auth/check-email')
  getHello(): string {
    return this.checkEmailService.getHello();
  }
}
