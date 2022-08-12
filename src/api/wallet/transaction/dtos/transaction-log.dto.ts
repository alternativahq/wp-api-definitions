import { TransactionStateEnum } from "./tansaction-state.enum";

export class TransactionLogDto {

    id: string;
    state: TransactionStateEnum;
    createdAt: Date;
}