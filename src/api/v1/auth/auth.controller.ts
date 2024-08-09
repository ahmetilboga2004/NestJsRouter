import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginBody, RegisterBody } from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  login(@Body() { username, password }: LoginBody) {
    return this.authService.login({ username, password });
  }
  @Post('register')
  register(@Body() { email, username, password }: RegisterBody) {
    return this.authService.register({ email, username, password });
  }
}
