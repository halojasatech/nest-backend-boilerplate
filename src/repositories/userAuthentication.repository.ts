import { UserAuthentication } from '@database/models/user-authentication.model'

export class UserAuthenticationRepository {
  private userAuthenticationModel = UserAuthentication

  findEmail(email: string){
    return this.userAuthenticationModel.findAll({where: {email}})
  }
}