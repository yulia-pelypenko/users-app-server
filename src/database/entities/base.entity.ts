import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity as TypeOrmBaseEntity,
  UpdateDateColumn,
} from 'typeorm';

export interface IBaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export abstract class BaseEntity
  extends TypeOrmBaseEntity
  implements IBaseEntity
{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  public updatedAt: Date;
}
