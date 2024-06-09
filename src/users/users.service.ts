import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async getAllUsers() {
    return this.prisma.person.findMany();
  }
}
