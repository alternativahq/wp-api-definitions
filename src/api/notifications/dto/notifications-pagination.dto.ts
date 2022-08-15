import { NotificationDto } from './nottifications.dto';
import { PaginationMetaDto } from '../../pagination/dto/pagination-meta.dto';
import { PaginationLinkDto } from '../../pagination/dto/pagination-link.dto';

export class NotificationsPaginationDto {
  data: NotificationDto[];
  links: PaginationLinkDto;
  meta: PaginationMetaDto;
}
