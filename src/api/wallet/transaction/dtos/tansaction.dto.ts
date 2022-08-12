import { AssetEnum } from "./asset.enum";
import { TransactionStateEnum } from "./tansaction-state.enum";
import { TransactionTypeEnum } from "./tansaction-type.enum";
import { TransactionScopeEnum } from "./transaction-scope.enum";

export class TransactionDto {

    id: string;
    globalTxId: string;
    tenantId: string; 
    refId: string;
    hash: string;
    type: TransactionTypeEnum;
    state: TransactionStateEnum;
    asset: AssetEnum;
    fromAccountId : string;
    toAccountId : string;
    amount: number;
    fee: number;
    scope: TransactionScopeEnum
    createdAt: Date;
    updatedAt: Date;
}