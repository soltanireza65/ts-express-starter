import { IsEmail, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  public title: string;

  @IsString()
  public content: string;

  @IsString()
  public photo: string;
}
