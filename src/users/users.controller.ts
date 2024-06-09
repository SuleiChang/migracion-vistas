import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Render('users')
  async getAllUsers() {
    const users = await this.usersService.getAllUsers();
    return { users };
  }
}
