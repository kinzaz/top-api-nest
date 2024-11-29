import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<{
        password: string;
        email: string;
    }>;
    login({ login, password }: AuthDto): Promise<{
        acess_token: string;
    }>;
}
