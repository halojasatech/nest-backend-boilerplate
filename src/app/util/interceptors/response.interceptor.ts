import {
  Injectable,
  NestInterceptor,
  ArgumentsHost,
  CallHandler,
} from '@nestjs/common';
import { Request } from 'express';
import { map } from 'rxjs/operators';
import { SuccessException } from '@app/exceptions/http-exception';
// import log from '@app/util/logger/logger';

@Injectable()
export class ResponseInteceptor implements NestInterceptor {
  intercept(host: ArgumentsHost, next: CallHandler) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    return next.handle().pipe(
      map((data: any) => {
        throw new SuccessException(request, data);
      }),
    );
  }
}
