import { Get, Post, Body, Put, Delete, Param, Query, Controller, ParseIntPipe } from '@nestjs/common';
import { ApiParam, ApiBearerAuth, ApiResponse, ApiOperation, ApiTags, ApiQuery, } from '@nestjs/swagger';
import { GameSessionInfoDto } from './dto/game-session-info.dto';
import { GameSessionDto } from './dto/game-session.dto';


@ApiTags('game-servers/')
@Controller(`game-servers`)
export class GameServerController {
  constructor() {}



  @ApiOperation({ summary: 'Initiate game session on a remote game server.' })
  @ApiResponse({ status: 201, description: 'The game session data has been successfully initiated.' , type:GameSessionInfoDto})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@UsePipes(new ValidationPipe())
  @Post()
  async initiateGmaeSession(@Body() session:GameSessionDto):Promise<GameSessionInfoDto> {
    return Promise.resolve({
      url: "https://wodoland.io/games/sessions/1"
    })
  }

}
