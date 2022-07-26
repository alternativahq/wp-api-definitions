import { GameAchievementDto } from "./game-achievements.dto";
import { GameScoreCardDto } from "./game-score-card.dto";
import { ApiProperty } from '@nestjs/swagger';

export class GameResultDto {
    
    @ApiProperty()
    gameId:number;
    
    @ApiProperty()
    lobbyId:number;
    
    @ApiProperty({
        type: [GameScoreCardDto],
        description: 'The leaderboard object as array of GameScoreCard objects including particular users with rank and gameplay time.',
        minimum: 1,
    })
    scoreCard: GameScoreCardDto[];
    
    @ApiProperty()
    achievements:GameAchievementDto [];
}