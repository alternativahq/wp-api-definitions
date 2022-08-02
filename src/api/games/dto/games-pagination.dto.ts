import { PaginationLinkDto } from '../../pagination/dto/pagination-link.dto';
import { PaginationMetaDto } from '../../pagination/dto/pagination-meta.dto';
import { GameDto } from './game.dto';

export class GamesPaginationDto {
  data: GameDto[];
  links: PaginationLinkDto;
  meta: PaginationMetaDto;
}
