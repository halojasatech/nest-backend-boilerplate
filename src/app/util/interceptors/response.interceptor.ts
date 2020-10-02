import {
  Injectable,
  NestInterceptor,
  ArgumentsHost,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { SuccessException } from '@app/exceptions/http-exception';

@Injectable()
export class ResponseInteceptor implements NestInterceptor {
  intercept(host: ArgumentsHost, next: CallHandler) {
    return next.handle().pipe(
      map((data: any) => {
        throw new SuccessException(data);
      }),
    );
  }
}
