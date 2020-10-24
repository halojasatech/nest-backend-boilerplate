import { Column, Model, Table, CreatedAt, UpdatedAt, DeletedAt, IsUUID, IsEmail, Unique, HasOne, PrimaryKey } from 'sequelize-typescript';
import { UserData } from '@database/models/user-data.model';

@Table
export class UserAuthentication extends Model<UserAuthentication> {
  @PrimaryKey
  @IsUUID(4)
  @Column
  id: string;

  @IsEmail
  @Column
  email: string;

  @Column
  password: string;

  @Column
  oauthEmail: string;

  @Column
  oauthProvider: string;

  @Column
  oauthId: string;

  @HasOne(() => UserData, "userCode")
  userData: UserData[];

  @Column({ defaultValue: false })
  isActive: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}