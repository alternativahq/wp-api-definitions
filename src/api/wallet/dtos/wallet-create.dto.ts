import { AssetEnum } from "../transaction/dtos/asset.enum";

export class WalletCreateDto {
    userId:string;
    asset:AssetEnum
}