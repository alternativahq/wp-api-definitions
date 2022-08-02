import { PaginationMetaLinkDto } from './pagination-meta-link.dto';

export class PaginationMetaDto {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationMetaLinkDto;
  path: string;
  per_page: number;
  to: number;
  total: number;
}
