import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorator';
import IUser from 'src/types/user';
import { UserService } from './user.service';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: IUser) {
    return user
  }

  @Put('me')
  editMe(@GetUser('id') userId: number, @Body() {tag}: {tag: string}) {
    return this.usersService.editMe(userId, tag)
  }

  @Get(':username')
  getUserByName(@Param('username') username: string) {
    return this.usersService.getUserByName(username)
  }
}