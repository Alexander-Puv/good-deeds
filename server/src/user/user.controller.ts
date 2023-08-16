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
  editTag(@GetUser('id') userId: number, @Body() {tag}: {tag: string}) {
    return this.usersService.editTag(userId, tag)
  }

  @Get('find/:tag')
  getUserByTag(@Param('tag') tag: string) {
    return this.usersService.getUserByTag(tag)
  }
}
