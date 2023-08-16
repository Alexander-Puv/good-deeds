import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { editDeedDto } from './dto';

@Injectable()
export class DeedService {
  constructor(private prisma: PrismaService) {}

  async addDeed(userId: number, text: string) {
    return this.prisma.deed.create({
      data: {
        text,
        userId
      }
    })
  }

  async editDeed(deedId: number, data: editDeedDto) {
    return this.prisma.deed.update({
      where: {
        id: deedId
      },
      data: {
        ...data
      }
    })
  }

  async deleteDeed(deedId: number) {
    return this.prisma.deed.delete({
      where: {
        id: deedId
      }
    })
  }
}
