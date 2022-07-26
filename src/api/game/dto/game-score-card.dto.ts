import { ApiProperty } from '@nestjs/swagger';

export class GameScoreCardDto {

    @ApiProperty()
    userId:string;

    @ApiProperty()
    rank:number;

    @ApiProperty()
    score:string;

    @ApiProperty()
    timePlayed:number;

}