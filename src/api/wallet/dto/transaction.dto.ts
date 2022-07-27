import { AssetEnum } from "./asset.enum";

export class TransactionDto {
    from:string;
    to:string;
    amount:string;
    asset:AssetEnum
}