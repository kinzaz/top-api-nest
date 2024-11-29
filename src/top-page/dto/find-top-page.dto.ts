import { IsEnum } from 'class-validator';
import { TopLevelCategory } from './create-top-page.dto';

export class FindTopPageDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;
}
