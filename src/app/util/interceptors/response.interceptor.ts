import { Injectable, NestInterceptor, HttpStatus, ArgumentsHost } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatusException } from '@app/exceptions/httpException'

@Injectable()
export class ResponseInteceptor implements NestInterceptor {
  intercept(host: ArgumentsHost , next,): Observable<any> {
	const ctx = host.switchToHttp();
	const request = ctx.getRequest<Request>();
	
    return next.handle().pipe(
      map((data: any) => {
		const traceId =request.header('traceId')
		throw new StatusException(HttpStatus.OK, traceId, data);
      }),
    );
  }
}