import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }
  async create(createUserDto: CreateUserDto) {
    const { password, confirm_password, ...data } = createUserDto
    if (password != confirm_password) {
      throw new BadRequestException("passwords are not the same")
    }

    const hashedPassword = await bcrypt.hash(password, 7);
    const newUser = await this.prismaService.user.create({
      data: { ...data, hashedPassword }
    })
    return newUser
  }

  findAll() {
    return this.prismaService.user.findMany()
  }

  async findOne(id: number) {

    const user = await this.prismaService.user.findUnique({ where: { id } })
    if (!user) {
      throw new NotFoundException("User not found")
    }
    return user

  }

  async findUserByEmail(email: string) {

    const user = await this.prismaService.user.findUnique({ where: { email } })
    return user

  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id)
    return this.prismaService.user.update({ where: { id }, data: { ...updateUserDto } })
  }

  async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.user.delete({ where: { id } })
  }
  async updateRefreshToken(id: number, hashed_refresh_token: string | null) {
    const updateUser = await this.prismaService.user.update({
        where: { id },
        data: { hashesToken: hashed_refresh_token },  
    });
    return updateUser;
}

}
