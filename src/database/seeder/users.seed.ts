import faker from 'faker';
import bcrypt from 'bcryptjs';

import { User } from '../models/user.model';

class SeedUser {
  public async many(count: number) {
    for (const _i of Array(count)) {
      await this.one();
    }
  }

  public async one() {
    await User.create({
      userId: faker.random.uuid(),
      firstName: 'john',
      lastName: 'doe',
      email: 'john@mail.com',
      password: bcrypt.hashSync('123456', 12),
      isActive: true,
    });
  }
}

const seedUser = new SeedUser();

export default seedUser;
