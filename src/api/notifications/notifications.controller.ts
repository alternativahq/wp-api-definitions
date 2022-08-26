import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NotificationsPaginationDto } from './dto/notifications-pagination.dto';
import { SentNotificationDto } from './dto/sent-notification.dto';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  @ApiResponse({
    status: 200,
    description: 'List all notifications paginated',
    type: NotificationsPaginationDto,
  })
  @Get()
  index(): NotificationsPaginationDto {
    return new NotificationsPaginationDto();
  }

  @ApiResponse({
    status: 204,
    description: 'Notifications are created',
  })
  @Post()
  // eslint-disable-next-line
  sendNotification(@Body() payload: SentNotificationDto): void {}

  @ApiResponse({
    status: 204,
    description: 'Notifications are deleted.',
  })
  @Delete()
  // eslint-disable-next-line
  deleteAll(): void {}

  @ApiResponse({
    status: 204,
    description: 'Notification marked as read.',
  })
  @Put(':id/read')
  // eslint-disable-next-line
  markAsRead(@Param('id') id: string,): void {}
}
