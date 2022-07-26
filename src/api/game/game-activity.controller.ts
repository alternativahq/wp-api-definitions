import { Get, Post, Body, Put, Delete, Param, Query, Controller, ParseIntPipe } from '@nestjs/common';
import { ApiParam, ApiBearerAuth, ApiResponse, ApiOperation, ApiTags, ApiQuery, } from '@nestjs/swagger';
import { GameResultDto } from './dto/game-result.dto';


@ApiTags('game-activities/')
@Controller(`game-activities`)
export class GameActivityController {
  constructor() {}



  @ApiOperation({ summary: 'Process Game Result' })
  @ApiResponse({ status: 201, description: 'The gmae result has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@UsePipes(new ValidationPipe())
  @Post()
  async processGameResult(@Body() gameResult:GameResultDto):Promise<void> {
  }

}
