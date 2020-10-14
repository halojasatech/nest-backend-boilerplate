import {
  Injectable,
  NestInterceptor,
  ArgumentsHost,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { SuccessResponse } from '@app/exceptions/http-exception';

@Injectable()
export default class ResponseInterceptor implements NestInterceptor {
  intercept(host: ArgumentsHost, next: CallHandler) {
    return next.handle().pipe(
      map((data: any) => {
        throw new SuccessResponse(data);
      }),
    );
  }
}
