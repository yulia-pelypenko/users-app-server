import { BaseEntity, IBaseEntity } from 'src/database/entities/base.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

export interface IUser extends IBaseEntity {
  id: string;
  fullName: string;
  gender: string;
  email: string;
  picture: string;
  location: string;
  latitude: number;
  longitude: number;
}

@Entity('users')
export class User extends BaseEntity implements IUser {
  @PrimaryColumn()
  declare id: string;

  @Column()
  fullName: string;

  @Column()
  gender: string;

  @Column({ unique: true })
  email: string;

  @Column()
  picture: string;

  @Column()
  location: string;

  @Column('float', { nullable: true })
  latitude: number;

  @Column('float', { nullable: true })
  longitude: number;
}
