import { Injectable, NestInterceptor, HttpStatus, ArgumentsHost, CallHandler } from '@nestjs/common';
import { Request } from 'express';
import { map } from 'rxjs/operators';
import { SuccessException } from '@app/exceptions/http-exception'

@Injectable()
export class ResponseInteceptor implements NestInterceptor {
  intercept(host: ArgumentsHost, next: CallHandler) {
  const ctx = host.switchToHttp();
  const request = ctx.getRequest<Request>();
  const traceId = request.header('traceId')
    return next.handle().pipe(
      map((data: any) => {
		  throw new SuccessException(traceId, data);
      }),
    );
  }
}