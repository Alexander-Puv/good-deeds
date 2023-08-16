import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editTag(userId: number, tag: string) {
    const updatedTag = tag ? `@${tag}` : null
    const user = await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        tag: updatedTag
      }
    })

    delete user.hash
    return user
  }

  async getUserByTag(tag: string) {
    return this.prisma.user.findUnique({
      where: {
        tag
      }
    })
  }
}
