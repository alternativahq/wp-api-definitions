import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Param, Post } from '@nestjs/common';
import { ChatRoomMessageErrorDto } from './dto/chat-room-message-error.dto';
import { ChatRoomMessagePayloadDto } from './dto/chat-room-message-payload.dto';

@ApiTags('chat-rooms')
@Controller('chat-rooms')
export class ChatRoomsController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @ApiResponse({
    status: 204,
    description: 'Send message to specific chat room',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: ChatRoomMessageErrorDto,
  })
  @Post(':id/message')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  message(
    @Param('id') id: string,
    @Body() payload: ChatRoomMessagePayloadDto,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ): void {}
}
