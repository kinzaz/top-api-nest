import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    createUser(dto: AuthDto): Promise<{
        password: string;
        email: string;
    }>;
    findUser(email: string): Promise<{
        password: string;
        email: string;
    }>;
    validateUser(email: string, password: string): Promise<Pick<User, 'email'>>;
    login(email: string): Promise<{
        acess_token: string;
    }>;
}
