import { IsString, IsNotEmpty } from 'class-validator';
export class UpdateDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  content: string;
}
