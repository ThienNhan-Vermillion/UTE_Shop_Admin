import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmailService } from './services/email.service';
import { OtpService } from './services/otp.service';
import { UTEShopUser } from '../models/uteshop.models';
@Module({
  imports: [
    SequelizeModule.forFeature([UTEShopUser]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, EmailService, OtpService],
  exports: [AuthService],
})
export class AuthModule {}
