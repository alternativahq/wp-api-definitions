import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { GamesPaginationDto } from './dto/games-pagination.dto';
import { GameDto } from './dto/game.dto';
import {
  GameLobbiesPaginationDto
} from '../game-lobbies/dto/game-lobbies-pagination.dto';

@ApiTags('games')
@Controller('games')
export class GamesController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @ApiResponse({
    status: 200,
    description: 'List all available games',
    type: GamesPaginationDto,
  })
  @Get()
  index(): GamesPaginationDto {
    return new GamesPaginationDto();
  }

  @ApiResponse({
    status: 200,
    description: 'Get specific game record',
    type: GameDto,
  })
  @Get(':id')
  show(@Param('id') id: string): GameDto {
    return new GameDto();
  }

  @ApiResponse({
    status: 200,
    description: 'Get list of available game lobbies for specific game',
    type: GameLobbiesPaginationDto,
  })
  @Get(':id/game-lobbies')
  listGameLobbiesForGame(@Param('id') id: string): GameLobbiesPaginationDto {
    return new GameLobbiesPaginationDto();
  }
}
