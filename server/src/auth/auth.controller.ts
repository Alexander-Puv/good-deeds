import { Body, Controller, Post, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    return await this.authService.signup(dto)
  }

  @Post('login')
  async login(@Body() dto: LoginDto, @Headers('Authorization') header: string) {
    return await this.authService.login(dto)
  }
}
