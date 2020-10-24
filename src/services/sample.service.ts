import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

import { UserAuthenticationRepository } from '../repositories/userAuthentication.repository'

@Injectable({ scope: Scope.REQUEST })
export class SampleService {
  private userAuthenticationRepository = new UserAuthenticationRepository ()
  constructor(@Inject(REQUEST) private request: Request) {
  }

  checkEmailStatus() {
    const { email } = this.request.body
    let result

    this.userAuthenticationRepository.findEmail(email).then((res) => {
      result = res
    }).catch((error) => {
      return error
    })

    if(result){
      return result
    }
    return 'Hello World!'
  }
}
