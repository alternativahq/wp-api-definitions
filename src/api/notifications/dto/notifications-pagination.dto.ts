import { PaginationLinkDto } from '../../pagination/dto/pagination-link.dto';
import { PaginationMetaDto } from '../../pagination/dto/pagination-meta.dto';
import { NotificationDto } from './notification.dto';

export class NotificationsPaginationDto {
  data: NotificationDto[];
  links: PaginationLinkDto;
  meta: PaginationMetaDto;
}
