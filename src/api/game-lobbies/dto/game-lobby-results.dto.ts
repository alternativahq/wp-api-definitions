import { GameLobbyResultScoreDto } from './game-lobby-result-score.dto';
import { GameLobbyResultAchievementDto } from './game-lobby-result-achievement.dto';

export class GameLobbyResultsDto {
  scores: GameLobbyResultScoreDto[];
  achievements: GameLobbyResultAchievementDto[];
}
