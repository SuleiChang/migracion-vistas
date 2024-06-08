import { Module } from '@nestjs/common';
import { userController } from './users.controller';

@Module({
  controllers: [userController],
})
export class UsersModule {}
