import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorator';
import IUser from 'src/types/user';
import { UsersService } from './users.service';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  getMe(@GetUser() user: IUser) {
    return user
  }

  @Put('me')
  editMe(@GetUser('id') id: number, @Body() {tag}: {tag: string}) {
    return this.usersService.editMe(id, tag)
  }

  @Get(':username')
  getUserByName(@Param('username') username: string) {
    return this.usersService.getUserByName(username)
  }
}
