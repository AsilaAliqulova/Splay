import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AudioTrackService } from './audio_track.service';
import { CreateAudioTrackDto } from './dto/create-audio_track.dto';
import { UpdateAudioTrackDto } from './dto/update-audio_track.dto';

@Controller('audio-track')
export class AudioTrackController {
  constructor(private readonly audioTrackService: AudioTrackService) {}

  @Post()
  create(@Body() createAudioTrackDto: CreateAudioTrackDto) {
    return this.audioTrackService.create(createAudioTrackDto);
  }

  @Get()
  findAll() {
    return this.audioTrackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audioTrackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudioTrackDto: UpdateAudioTrackDto) {
    return this.audioTrackService.update(+id, updateAudioTrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audioTrackService.remove(+id);
  }
}
