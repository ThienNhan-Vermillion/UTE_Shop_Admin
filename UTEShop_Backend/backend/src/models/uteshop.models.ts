import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';

/* ==========================
   USER MODEL
========================== */
@Table({ tableName: 'users', timestamps: false })
export class UTEShopUser extends Model<UTEShopUser> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  
  @Column({ type: DataType.STRING, allowNull: false })
  declare fullName: string;
  
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare username: string;
  
  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'active' })
  declare status: string;
  
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;
  
  @Column({ type: DataType.DATEONLY, allowNull: false })
  declare dob: string;
  
  @Column({ type: DataType.STRING, allowNull: false })
  declare phone: string;
  
  @Column({ type: DataType.STRING })
  declare address: string;
  
  @Column({ 
    type: DataType.INTEGER, 
    defaultValue: 0, 
    comment: 'Tổng số điểm tích lũy xu hiện có'
  })
  declare loyalty_points: number;

  @HasMany(() => UTEShopOrder, 'user_id')
  declare orders: UTEShopOrder[];

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'user' })
  declare role: string;
}

/* ==========================
   DRINK MODEL
========================== */
@Table({ tableName: 'drinks', timestamps: false })
export class UTEShopDrink extends Model<UTEShopDrink> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  
  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;
  
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare slug: string;
  
  @Column({ type: DataType.TEXT })
  declare description: string;
  
  @Column({ type: DataType.DECIMAL(12, 2), allowNull: false })
  declare price: number;
  
  @Column({ type: DataType.DECIMAL(12, 2) })
  declare salePrice: number;
  
  @Column({ type: DataType.STRING })
  declare size: string;
  
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  declare stock: number;
  
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  declare views: number;
  
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  declare sold: number;
  
  @Column({ type: DataType.TEXT })
  declare image_url: string;
  
  @Column({ type: DataType.INTEGER })
  declare category_id: number;
  
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare is_hidden: boolean;
  
  @Column({ type: DataType.DATE })
  declare created_at: Date;
  
  @Column({ type: DataType.DATE })
  declare updated_at: Date;

  @HasMany(() => UTEShopOrderItem, 'drink_id')
  declare orderItems: UTEShopOrderItem[];
}

/* ==========================
   ORDER MODEL
========================== */
@Table({ tableName: 'orders', timestamps: false })
export class UTEShopOrder extends Model<UTEShopOrder> {
  declare id: number;
  
  @ForeignKey(() => UTEShopUser)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare user_id: number;
  
  @Column({ type: DataType.STRING(50), allowNull: false, unique: true })
  declare order_number: string;
  
  @Column({ 
    type: DataType.ENUM('pending', 'confirmed', 'preparing', 'shipping', 'delivered', 'cancelled'),
    defaultValue: 'pending',
    allowNull: false 
  })
  declare status: string;
  
  @Column({ 
    type: DataType.ENUM('COD', 'BANKING', 'MOMO'),
    allowNull: false 
  })
  declare payment_method: string;
  
  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  declare subtotal: number;
  
  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false, defaultValue: 0 })
  declare shipping_fee: number;
  
  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  declare total: number;
  
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  declare loyalty_points_used: number;
  
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  declare loyalty_points_earned: number;
  
  @Column({ type: DataType.TEXT })
  declare shipping_address: string;
  
  @Column({ type: DataType.STRING(20) })
  declare shipping_phone: string;
  
  @Column({ type: DataType.TEXT })
  declare notes: string;
  
  @Column({ type: DataType.DATE })
  declare cancelled_at: Date;
  
  @Column({ type: DataType.TEXT })
  declare cancelled_reason: string;
  
  @Column({ type: DataType.DATE })
  declare confirmed_at: Date;
  
  @Column({ type: DataType.DATE })
  declare preparing_at: Date;
  
  @Column({ type: DataType.DATE })
  declare shipping_at: Date;
  
  @Column({ type: DataType.DATE })
  declare delivered_at: Date;
  
  @Column({ type: DataType.DATE })
  declare created_at: Date;
  
  @Column({ type: DataType.DATE })
  declare updated_at: Date;

  @BelongsTo(() => UTEShopUser, 'user_id')
  declare user: UTEShopUser;

  @HasMany(() => UTEShopOrderItem, 'order_id')
  declare orderItems: UTEShopOrderItem[];
}

/* ==========================
   ORDER ITEM MODEL
========================== */
@Table({ tableName: 'order_items', timestamps: false })
export class UTEShopOrderItem extends Model<UTEShopOrderItem> {
  declare id: number;
  
  @ForeignKey(() => UTEShopOrder)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare order_id: number;
  
  @ForeignKey(() => UTEShopDrink)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare drink_id: number;
  
  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
  declare quantity: number;
  
  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  declare price: number;
  
  @Column({ type: DataType.STRING(50) })
  declare size: string;
  
  @Column({ type: DataType.STRING(50) })
  declare ice_level: string;
  
  @Column({ type: DataType.STRING(50) })
  declare sugar_level: string;
  
  @Column({ type: DataType.TEXT })
  declare notes: string;
  
  @Column({ type: DataType.DATE })
  declare created_at: Date;
  
  @Column({ type: DataType.DATE })
  declare updated_at: Date;

  @BelongsTo(() => UTEShopOrder, 'order_id')
  declare order: UTEShopOrder;

  @BelongsTo(() => UTEShopDrink, 'drink_id')
  declare drink: UTEShopDrink;
}

/* ==========================
   REVIEW MODEL
========================== */
@Table({ tableName: 'reviews', timestamps: false })
export class UTEShopReview extends Model<UTEShopReview> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  
  @ForeignKey(() => UTEShopUser)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare user_id: number;
  
  @ForeignKey(() => UTEShopDrink)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare drink_id: number;
  
  @ForeignKey(() => UTEShopOrder)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare order_id: number;
  
  @Column({ type: DataType.INTEGER, allowNull: false, validate: { min: 1, max: 5 } })
  declare rating: number;
  
  @Column({ type: DataType.TEXT, allowNull: true })
  declare comment: string | null;
  
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare is_hidden: boolean;
  
  @Column({ type: DataType.DATE })
  declare created_at: Date;

  @Column({ type: DataType.DATE })
  declare updated_at: Date;

  @BelongsTo(() => UTEShopUser, 'user_id')
  declare user: UTEShopUser;

  @BelongsTo(() => UTEShopDrink, 'drink_id')
  declare drink: UTEShopDrink;

  @BelongsTo(() => UTEShopOrder, 'order_id')
  declare order: UTEShopOrder;
}

/* ==========================
   ACTIVITY MODEL
========================== */
@Table({ tableName: 'activities', timestamps: false })
export class UTEShopActivity extends Model<UTEShopActivity> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  
  @Column({ type: DataType.STRING, allowNull: false })
  declare type: string;
  
  @Column({ type: DataType.STRING, allowNull: false })
  declare description: string;
  
  @Column({ type: DataType.DATE, allowNull: false })
  declare created_at: Date;
}

/* ==========================
   VOUCHER MODEL
========================== */
@Table({
  tableName: 'vouchers',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class UTEShopVoucher extends Model<UTEShopVoucher> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING(32), allowNull: false, unique: true })
  declare code: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare description: string;

  @Column({
    type: DataType.ENUM('percentage', 'fixed'),
    allowNull: false,
    defaultValue: 'fixed',
  })
  declare discount_type: 'percentage' | 'fixed';

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  declare discount_value: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  declare min_order_amount: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  declare max_discount_amount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  declare usage_limit: number;

  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
  declare used_count: number;

  @Column({ type: DataType.DATE, allowNull: true })
  declare start_date: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  declare end_date: Date;

  @Column({ 
    type: DataType.ENUM('active', 'inactive', 'expired'),
    allowNull: false,
    defaultValue: 'active'
  })
  declare status: 'active' | 'inactive' | 'expired';

  @Column({ type: DataType.DATE })
  declare created_at: Date;

  @Column({ type: DataType.DATE })
  declare updated_at: Date;
}
