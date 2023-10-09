import { IsString, IsNotEmpty } from 'class-validator';
export class CreateDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  content: string;
}
