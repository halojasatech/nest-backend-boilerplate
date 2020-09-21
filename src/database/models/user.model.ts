import { Column, Model, Table, CreatedAt, UpdatedAt, DeletedAt, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {

  @Column({
    type: DataType.STRING(10)
  })
  userId: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column({
    type: DataType.STRING(60)
  })
  password: string;

  @Column({ defaultValue: false })
  isActive: boolean;

  @CreatedAt
  createdAt: Date;
 
  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}