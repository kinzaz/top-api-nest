import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compare, genSalt } from 'bcryptjs';
import { hash } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { USER_NOT_FOUND } from './auth.consts';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async createUser(dto: AuthDto) {
    const salt = await genSalt(10);
    const user = {
      email: dto.login,
      password: hash(dto.password, salt),
    };

    return this.prismaService.user.create({
      data: user,
    });
  }

  async findUser(email: string) {
    return this.prismaService.user.findFirst({
      where: { email },
    });
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Pick<User, 'email'>> {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND);
    }
    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) {
      throw new UnauthorizedException(USER_NOT_FOUND);
    }
    return { email: user.email };
  }

  async login(email: string) {
    const payload = { email };
    return {
      acess_token: await this.jwtService.signAsync(payload),
    };
  }
}
