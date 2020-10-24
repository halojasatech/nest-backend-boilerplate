import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  IsUUID
} from 'sequelize-typescript';
import { UserAuthentication } from '@database/models/user-authentication.model';

@Table
export class UserData extends Model<UserData> {

  @ForeignKey(() => UserAuthentication)
  @IsUUID(4)
  @Column
  userCode: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  displayName: string;

  @Column
  phoneNumber: string;

  @Column
  photo: string;

  @Column
  about: string;

  @Column
  jobRole: string;

  @Column
  localTime: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

}