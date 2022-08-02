import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GameLobbyDto } from './dto/game-lobby.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GameLobbyErrorDto } from './dto/game-lobby-error.dto';
import { GameLobbyResultsDto } from './dto/game-lobby-results.dto';

@ApiTags('game-lobbies')
@Controller('game-lobbies')
export class GameLobbiesController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @ApiResponse({
    status: 200,
    description: 'List all available game lobbies for specific game',
    type: [GameLobbyDto],
  })
  @Get(':id')
  index(@Param('id') id: string): GameLobbyDto {
    return new GameLobbyDto();
  }

  @ApiResponse({
    status: 201,
    description: 'Join specific game lobby',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: GameLobbyErrorDto,
  })
  @Post(':id/join')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  join(@Param('id') id: string): void {}

  @ApiResponse({
    status: 204,
    description: 'Leave specific game lobby',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: GameLobbyErrorDto,
  })
  @Post(':id/leave')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  leave(@Param('id') id: string): void {}

  @ApiResponse({
    status: 204,
    description:
      'Game server payload to be sent to GameHub containing player results',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: GameLobbyErrorDto,
  })
  @Post(':id/results')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  results(
    @Param('id') id: string,
    @Body() payload: GameLobbyResultsDto,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ): void {}
}
