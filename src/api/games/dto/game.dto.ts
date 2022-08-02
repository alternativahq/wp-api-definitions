import { GameStatus } from '../enums/game-status.enum';

export class GameDto {
  id: string;
  name: string;
  description: string;
  status: GameStatus;
  image: string;
  created_at: Date;
  updated_at: Date;
}
