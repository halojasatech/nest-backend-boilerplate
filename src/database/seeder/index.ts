import userSeed from './users.seed'

export default class Seeds {
  async seed(){
    await userSeed()
  }
}