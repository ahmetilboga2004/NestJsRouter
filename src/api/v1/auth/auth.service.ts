import { Injectable } from '@nestjs/common';
import { LoginBody, RegisterBody } from './auth.interface';

@Injectable()
export class AuthService {
  login(loginBody: LoginBody) {
    return { username: loginBody.username, password: loginBody.password };
  }
  register(registerBody: RegisterBody) {
    return {
      email: registerBody.email,
      username: registerBody.username,
      password: registerBody.password,
    };
  }
}
