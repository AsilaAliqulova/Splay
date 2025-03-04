import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeariesService } from './searies.service';
import { CreateSearyDto } from './dto/create-seary.dto';
import { UpdateSearyDto } from './dto/update-seary.dto';

@Controller('searies')
export class SeariesController {
  constructor(private readonly seariesService: SeariesService) {}

  @Post()
  create(@Body() createSearyDto: CreateSearyDto) {
    return this.seariesService.create(createSearyDto);
  }

  @Get()
  findAll() {
    return this.seariesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seariesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSearyDto: UpdateSearyDto) {
    return this.seariesService.update(+id, updateSearyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seariesService.remove(+id);
  }
}
