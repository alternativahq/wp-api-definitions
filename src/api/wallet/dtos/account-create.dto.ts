import { AssetEnum } from "../transaction/dtos/asset.enum";

export class AccountCreateDto {
    userId:string;
    asset:AssetEnum
}