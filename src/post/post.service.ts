import { Injectable, Body, NotFoundException } from '@nestjs/common';
import { CreateDto } from 'src/dto/create.dto';
import { UpdateDto } from 'src/dto/update.dto';
export interface BlogPost {
  id: number;
  title: string;
  content: string;
}
@Injectable()
export class PostService {
  private posts: BlogPost[] = [];
  create(createDto: CreateDto) {
    const id: number = Date.now();
    const post = { id, ...createDto };
    this.posts.push(post);
    return post;
  }
  findAll() {
    return this.posts;
  }
  findById(id: number) {
    const post = this.posts.find((p) => p.id == id);
    console.log(post);
    if (!post) {
      throw new NotFoundException(`Post with id: ${id} not found`);
    }
    return post;
  }
  update(id: number, updateDto: UpdateDto) {
    const index = this.posts.findIndex((p) => p.id == id);
    console.log(index);
    if (index == -1) {
      throw new NotFoundException(`Post with id: ${id} not found`);
    }
    const updatedPost = { id, ...updateDto };
    return (this.posts[index] = updatedPost);
  }
  delete(id: number) {
    const index = this.posts.findIndex((p) => p.id == id);
    console.log(index);
    if (index == -1) {
      throw new NotFoundException(`Post with id: ${id} not found`);
    }
    const post = this.posts[index];
    this.posts.splice(index, 1)[0];
    return post;
  }
}
