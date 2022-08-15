import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotificationDto } from './dto/nottifications.dto';
import { Body, Controller, Get, Param, Post , Put, Delete} from '@nestjs/common';
import { NotificationErrorDto } from './dto/notification-error.dto';
import { NotificationUnreadCount } from './dto/notifications-unread-count.dto';



@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

/////////////////////////////////////////////////////////////////////

  @ApiResponse({
    status: 200,
    description: 'List all notifications for specific user',
    type: [NotificationDto],
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: NotificationErrorDto,
  })
  @Get('/')
  index(): NotificationUnreadCount {
    return new NotificationUnreadCount();
  }

/////////////////////////////////////////////////////////////////////

  @ApiResponse({
    status: 200,
    description: 'that is the count of notifications unread',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: NotificationErrorDto,
  })
  @Get('unread-count')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unreadNotificationsCount():  NotificationUnreadCount {
    return new NotificationUnreadCount();
  }

/////////////////////////////////////////////////////////////////////  

  @ApiResponse({
    status: 204,
    description: 'stor new notification',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: NotificationErrorDto,
  })
  @Post('/')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sendNotificationBroadcast (@Body() payload: NotificationDto): void {};

/////////////////////////////////////////////////////////////////////

  @ApiResponse({
    status: 204,
    description:
      'notification will update',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: NotificationErrorDto,
  })
  @Put('{notification}/read')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  markNotificationAsRead(@Param('notification') notification: string,
  @Body() payload: NotificationDto ): void {};


/////////////////////////////////////////////////////////////////////

@ApiResponse({
    status: 204,
    description: 'List all notifications for specific user',
    type: [NotificationDto],
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: NotificationErrorDto,
  })
  @Delete('/')
   deleteNotifications(): void {};
  
}