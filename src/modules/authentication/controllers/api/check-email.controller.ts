import { Controller, Post } from '@nestjs/common';
import { CheckEmailService } from '../../services/api/check-email.service';

@Controller()
export class AuthController {
  constructor(private readonly checkEmailService: CheckEmailService) {}

  @Post('/auth/check-email')
  getHello(): string {
    return this.checkEmailService.getHello();
  }
}