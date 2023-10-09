import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateDto } from 'src/dto/create.dto';
import { PostService } from './post.service';
import { UpdateDto } from 'src/dto/update.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @Post()
  create(@Body() createDto: CreateDto) {
    return this.postService.create(createDto);
  }

  @Get()
  getAllPosts() {
    return this.postService.findAll();
  }
  @Get(':id')
  getPostbyId(@Param('id') id: number) {
    console.log(id);
    return this.postService.findById(id);
  }
  @Put(':id')
  updatePostbyId(@Param('id') id: number, @Body() updateDto: UpdateDto) {
    console.log(updateDto);
    return this.postService.update(id, updateDto);
  }
  @Delete(':id')
  deletePostbyId(@Param('id') id: number) {
    console.log(id);
    return this.postService.delete(id);
  }
}
