import { GameLobbyStatusEnum } from '../enums/game-lobby-status.enum';

export class GameLobbyDto {
  id: string;
  game_id: string;
  name: string;
  description: string;
  image: string;
  theme_color: string;
  status: GameLobbyStatusEnum;
  rules: string;
  asset_id: string;
  base_entrance_fee: string;
  min_players: number;
  max_players: number;
  available_spots: number;
  scheduled_at: Date;
  created_at: Date;
  updated_at: Date;
}
