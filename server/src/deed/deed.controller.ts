import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorator';
import { DeedService } from './deed.service';
import { editDeedDto } from './dto';

@UseGuards(AuthGuard('jwt'))
@Controller('deed')
export class DeedController {
  constructor(private deedService: DeedService) {}

  @Post()
  addDeed(
    @GetUser('id') userId: number,
    @Body() {text}: {text: string}
  ) {
    return this.deedService.addDeed(userId, text)
  }

  @Put(':deedId')
  editDeed(
    @Param('deedId') deedId: string,
    @Body() data: editDeedDto
  ) {
    return this.deedService.editDeed(Number(deedId), data)
  }

  @Delete(':deedId')
  deleteDeed(@Param('deedId') deedId: string) {
    return this.deedService.deleteDeed(Number(deedId))
  }
}
