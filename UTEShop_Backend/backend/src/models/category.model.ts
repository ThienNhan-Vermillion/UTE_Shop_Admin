import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UTEShopDrink } from './uteshop.models';

@Table({ tableName: 'categories', timestamps: false })
export class UTEShopCategory extends Model<UTEShopCategory> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare name: string;

  @Column({ type: DataType.STRING, allowNull: true, unique: true })
  declare slug: string;

  @HasMany(() => UTEShopDrink, 'category_id')
  declare drinks: UTEShopDrink[];
}
