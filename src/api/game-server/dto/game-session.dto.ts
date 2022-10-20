import { GameUserDto } from "./game-user.dto";

export class GameSessionDto {

    gameId:string;
    lobbyId:string;
    players:GameUserDto[];

}