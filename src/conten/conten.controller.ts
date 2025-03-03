import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContenService } from './conten.service';
import { CreateContenDto } from './dto/create-conten.dto';
import { UpdateContenDto } from './dto/update-conten.dto';

@Controller('conten')
export class ContenController {
  constructor(private readonly contenService: ContenService) {}

  @Post()
  create(@Body() createContenDto: CreateContenDto) {
    return this.contenService.create(createContenDto);
  }

  @Get()
  findAll() {
    return this.contenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContenDto: UpdateContenDto) {
    return this.contenService.update(+id, updateContenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contenService.remove(+id);
  }
}
