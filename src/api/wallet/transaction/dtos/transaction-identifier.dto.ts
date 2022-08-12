export class TransactionIdDto {

  id: string;
  hash: string
   
  constructor(id: string, hash: string) {
    this.id = id
    this.hash = hash
  }

}