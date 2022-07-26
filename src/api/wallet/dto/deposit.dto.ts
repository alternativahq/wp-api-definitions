import { AssetEnum } from "./asset.enum";

export class DepositDto {
    from:string;
    to:string;
    amount:string;
    asset:AssetEnum
}