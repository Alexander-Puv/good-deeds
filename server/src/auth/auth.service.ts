import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, SignupDto } from './dto';
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

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
  
      const token = await this.signToken(user.id, user.email)

      delete user.hash
      return token
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

      const token = await this.signToken(user.id, user.email)

      delete user.hash
      return token
    } catch (e) {
      throw e
    }
  }

  signToken(userId: number, email: string) {
    return this.jwt.signAsync(
      {sub: userId, email},
      {expiresIn: '6h', secret: this.config.get('JWT_SECRET')}
    )
  }
}
