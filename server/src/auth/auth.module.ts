import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AccessStrategy, RefreshStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, AccessStrategy, RefreshStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
