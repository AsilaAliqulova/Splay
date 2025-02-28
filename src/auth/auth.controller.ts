import { Controller, Post, Body, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateUserDto, UserSignIn } from '../user/dto';
import { SignInAdminDto } from '../admin/dto/admin-signIn';
import { CreateAdminDto } from '../admin/dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("signup-user")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }


  @Post("signIn-user")
  async signIn(
    @Body() signInDto: UserSignIn,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signIn(signInDto, res);
  }

  @HttpCode(200)
  @Post("signout-user")
  async signOut(
    refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOut(refreshToken, res);
  }


  @ApiOperation({ summary: "Log in" })
  @HttpCode(HttpStatus.OK)
  @Post("signIn-admin")
  async signInAdmin(
    @Body() signInDto: SignInAdminDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signInAdmin(signInDto, res);
  }

  @ApiOperation({ summary: "New admin rote" })
  @ApiResponse({
    status: 201,
    description: "Registered admin",
    type: String,
  })
  @Post("signup-admin")
  async signUpAdmin(@Body() createadminDto: CreateAdminDto) {
    return this.authService.signUpAdmin(createadminDto);
  }

}
