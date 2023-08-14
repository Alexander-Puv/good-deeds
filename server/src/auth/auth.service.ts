import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, SignupDto } from './auth.dto';
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserData } from 'src/types/user';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService) {}

  async signup(dto: SignupDto) {
    try {
      const hash = await argon.hash(dto.password)
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          username: dto.username,
          hash
        }
      })
  
      // const token = await this.signToken(user.id, user.email)

      delete user.hash
      return user
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Credentials are taken')
        }
      }
      throw e
    }
  }
  
  async login(dto: LoginDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email
        }
      })
      if (!user) throw new ForbiddenException('Credentials are incorrect')

      const passMatches = await argon.verify(user.hash, dto.password)
      if (!passMatches) throw new ForbiddenException('Password is incorrect')

      // const token = await this.signToken(user.id, user.email)

      delete user.hash
      return user
    } catch (e) {
      throw e
    }
  }

  // async signToken(userId: number, email: string) {
  //   const accessToken = await this.jwt.signAsync(
  //     {sub: userId, email},
  //     {expiresIn: '30m', secret: this.config.get('JWT_ACCESS_SECRET')}
  //   )
  //   const refreshToken = await this.jwt.signAsync(
  //     {sub: userId, email, refresh: true},
  //     {expiresIn: '30m', secret: this.config.get('JWT_REFRESH_SECRET')}
  //   )

  //   return {accessToken, refreshToken}
  // }
}
