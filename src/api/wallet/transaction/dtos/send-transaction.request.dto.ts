export class SendTransactionRequestDto {
    
    senderAccountId: number
    receiverAccountId: number
    asset: number
    amount: number
   // attributes?: Map<String, String>;

    constructor(
        senderAccountId: number, 
        receiverAccountId: number, 
        assetId: number, 
        amount: number, 
       // attributes?: Map<String, String>
    ) {
        this.senderAccountId = senderAccountId
        this.receiverAccountId = receiverAccountId
        this.asset = assetId
        this.amount = amount
       // this.attributes = attributes
      }
}
