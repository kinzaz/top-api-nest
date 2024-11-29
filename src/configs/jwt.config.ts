import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJwtConfig = async (
  configServie: ConfigService,
): Promise<JwtModuleOptions> => {
  return {
    secret: configServie.get('JWT_SECRET'),
  };
};
