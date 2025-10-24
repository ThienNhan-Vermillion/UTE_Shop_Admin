import { Module } from '@nestjs/common';

import { Users } from './models/users.model';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost', // đổi nếu khác
      port: 3306,
      username: 'root', // tài khoản của bạn
      password: '123456', // mật khẩu MySQL
      database: 'uteshop', // tên DB
      models: [
        Users,
      ],
      autoLoadModels: true,
      synchronize: false, // ⚠️ để false vì DB đã có sẵn
      logging: true,
    }),
  ],
})
export class AppModule {}
