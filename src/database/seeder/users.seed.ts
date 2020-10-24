import { Logger } from '@nestjs/common';
import { UserAuthentication } from '@database/models/user-authentication.model';
import { UserData } from '@database/models/user-data.model';

import * as faker from 'faker'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

export default async () => {
  let i = 0
  const userAuth = []
  const userData = []
  const providers = ['GOOGLE', 'FACEBOOK']

  for (const _ of Array(10)){
    userAuth.push({
      id: uuidv4(),
      email: faker.internet.email(),
      password: bcrypt.hashSync('123456', 12),
      oauthEmail: faker.internet.email(),
      oauthProvider: faker.random.arrayElement(providers),
      oauthId: uuidv4(),
    })

    userData.push(({
      userCode: userAuth[i++]['id'],
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      displayName: faker.name.firstName(),
      phoneNumber: faker.phone.phoneNumber('6281#########'),
      photo: faker.image.imageUrl(),
      about: 'lorem ipsum sit dolor amet',
      jobRole: faker.name.jobTitle(),
      localTime: faker.address.timeZone()
    }))
  }

  // Generate Data for UserAuthentication
  await UserAuthentication.bulkCreate(userAuth).catch((error) => {
    Logger.error(`Seeding Error @UserAuthentication (${error})`)
  })

  await UserData.bulkCreate(userData).catch((error) => {
    Logger.error(`Seeding Error @UserData (${error})`)
  })

}