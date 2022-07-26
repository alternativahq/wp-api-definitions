import { Get, Post, Body, Put, Delete, Param, Query, Controller, ParseIntPipe } from '@nestjs/common';
import { ApiParam, ApiBearerAuth, ApiResponse, ApiOperation, ApiTags, ApiQuery, } from '@nestjs/swagger';
import { GameSessionDto } from './dto/game-session.dto';


@ApiTags('game-servers/')
@Controller(`game-servers`)
export class GameServerController {
  constructor() {}



  @ApiOperation({ summary: 'Initiate game session on a remote game server.' })
  @ApiResponse({ status: 201, description: 'The gmae session data has been successfully sent.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@UsePipes(new ValidationPipe())
  @Post()
  async initiateGmaeSession(@Body() gameResult:GameSessionDto):Promise<void> {
  }

}
