import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { RefreshGuardGuard } from './guards/refresh-guard/refresh-guard.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    // return req.user

    const token = this.authService.login(req.user.id);

    return {
      id: req.user.id,
      token,
    };
  }

  @UseGuards(RefreshGuardGuard)
  @Post('refresh')
  refreshToken(@Req() req){
    return this.authService.refreshToken(req.user.id)
  }
}
