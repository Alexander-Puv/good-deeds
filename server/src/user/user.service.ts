import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editTag(userId: number, tag: string) {
    const updatedTag = tag ? `@${tag}` : null
  
    const tagTaken = await this.prisma.user.findFirst({
      where: {
        tag: updatedTag
      }
    })
    if (tagTaken) throw new ForbiddenException('Tag is taken')
  
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
    const user = await this.prisma.user.findFirst({
      where: {
        tag: `@${tag}`
      }
    })
    if (!user) throw new ForbiddenException('User was not found')

    delete user.hash
    return user
  }
}
