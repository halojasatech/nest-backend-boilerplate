import { Controller, Get } from '@nestjs/common';
import { SampleService } from '../services/sample.service';

@Controller()
export class AuthController {
  constructor(private readonly sampleService: SampleService) {}
  @Get('/')
  getHello(): string {
    return this.sampleService.getHello();
  }
}
