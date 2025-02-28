import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

 async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password, ...data } = createAdminDto
    if (password != confirm_password) {
      throw new BadRequestException("passwords are not the same")
  }
  const hashedPassword = await bcrypt.hash(password, 7);
  const newAdmin = await this.prismaService.admin.create({
    data: { ...data, hashedPassword }
  })
  return newAdmin

}

  findAll() {
    return this.prismaService.admin.findMany()
  }

  async findOne(id: number) {
    const admin = await this.prismaService.admin.findUnique({ where: { id } })
    if (!admin) {
      throw new NotFoundException("Admin not found")
    }
    return admin
  }

  async findAdminByEmail(email: string) {

    const admin = await this.prismaService.admin.findUnique({ where: { email } })
    return admin

  }

async  update(id: number, updateAdminDto: UpdateAdminDto) {
    await this.findOne(id)
    return this.prismaService.admin.update({ where: { id }, data: { ...updateAdminDto } })
 
  }

 async remove(id: number) {
    await this.findOne(id)
    return this.prismaService.admin.delete({ where: { id } })
 
  }

  async updateRefreshToken(id: number, hashed_refresh_token: string | null) {
    const updateadmin = await this.prismaService.admin.update({
        where: { id },
        data: { hashedToken: hashed_refresh_token },  
    });
    return updateadmin;
}
}
