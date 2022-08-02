import { GameLobbyDto } from './game-lobby.dto';
import { PaginationMetaDto } from '../../pagination/dto/pagination-meta.dto';
import { PaginationLinkDto } from '../../pagination/dto/pagination-link.dto';

export class GameLobbiesPaginationDto {
  data: GameLobbyDto[];
  links: PaginationLinkDto;
  meta: PaginationMetaDto;
}
