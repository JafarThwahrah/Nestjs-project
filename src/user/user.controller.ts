import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorators';
import { JwtGuard } from 'src/auth/guards';
@UseGuards(JwtGuard)
@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
export class UserController {
  @Get('me')
  //   getMe(@Req() req: Request) {
  //     return req.user;
  //   }
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser() {}
}
