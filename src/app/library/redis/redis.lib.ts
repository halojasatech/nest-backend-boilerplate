import config from '@app/config/app'
import redis from 'redis'
import { promisify } from 'util'

class Redis {
  private client: any
  private config: any
  public constructor(){
    this.config = {
      host: config.redis.host,
      port: config.redis.port
    }

    if(config.redis.auth_pass){
      this.config.auth_pass = config.redis.auth_pass
    }
    this.client = redis.createClient(this.config)
  }

  public set(key: string, value: any, mode?: 'EX',durationInSecond?: number){
   return promisify(this.client.set).apply(this.client, arguments)
  }

  public get(key: string){
    return promisify(this.client.get).apply(this.client, arguments)
  }

  public del(key: string){
    return promisify(this.client.del).apply(this.client, arguments)
  }
}

export default Redis