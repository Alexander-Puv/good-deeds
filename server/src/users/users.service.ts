import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async editMe(id: number, tag: string) {
    const updatedTag = tag ? `@${tag}` : null
    const user = await this.prisma.user.update({
      where: {
        id
      },
      data: {
        tag: updatedTag
      }
    })

    delete user.hash
    return user
  }

  async getUserByName(username: string) {
    return this.prisma.user.findMany({
      where: {
        username
      }
    })
  }
}
