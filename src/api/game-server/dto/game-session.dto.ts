import { GameUserDto } from "./game-user.dto";

export class GameSessionDto {

    gameId:number;
    lobbyId:number;
    players:GameUserDto[];

}