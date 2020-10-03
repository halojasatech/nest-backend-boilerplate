import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class SampleService {
  constructor(@Inject(REQUEST) private request: Request) {}
  getHello(): any {
    return 'Hello World'
  }
}
