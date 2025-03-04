import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentAudioService } from './content_audio.service';
import { CreateContentAudioDto } from './dto/create-content_audio.dto';
import { UpdateContentAudioDto } from './dto/update-content_audio.dto';

@Controller('content-audio')
export class ContentAudioController {
  constructor(private readonly contentAudioService: ContentAudioService) {}

  @Post()
  create(@Body() createContentAudioDto: CreateContentAudioDto) {
    return this.contentAudioService.create(createContentAudioDto);
  }

  @Get()
  findAll() {
    return this.contentAudioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentAudioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentAudioDto: UpdateContentAudioDto) {
    return this.contentAudioService.update(+id, updateContentAudioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentAudioService.remove(+id);
  }
}
