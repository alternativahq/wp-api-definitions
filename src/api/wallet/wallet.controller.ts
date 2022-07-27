import { Body, Controller, Get,Post } from '@nestjs/common';
import { ApiParam, ApiBearerAuth, ApiResponse, ApiOperation, ApiTags, ApiQuery, } from '@nestjs/swagger';
import { AccountCreateDto } from './dto/account-create.dto';
import { TransactionDto } from './dto/transaction.dto';
import { TransactionHash } from './dto/transaction-hash.dto';
import { WalletCreateDto } from './dto/wallet-create.dto';
import { BcTransactionHash } from './dto/bc-transaction-hash.dto ';


@ApiTags('wallets/')
@Controller(`wallets`)
export class WalletController {
  constructor() {}



  @ApiOperation({ summary: 'Create wallet' })
  @ApiResponse({ status: 201, description: 'The wallet has been successfully created.Returns unique uid of the wallet.', type:String })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@UsePipes(new ValidationPipe())
  @Post()
  async createWallet(@Body() dto:WalletCreateDto):Promise<string> {
    return "";
  }


  @ApiOperation({ summary: 'Create account' })
  @ApiResponse({ status: 201, description: 'The account has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@UsePipes(new ValidationPipe())
  @Post(`accounts`)
  async createNanowallet(@Body() dto:AccountCreateDto) {
  }

  @ApiOperation({ summary: 'Initiate a transaction' })
  @ApiResponse({ status: 201, description: 'A new transaction has been initiated and being processed by the system.', type: TransactionHash })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@UsePipes(new ValidationPipe())
  @Post(`txs/`)
  async processTx(@Body() dto:TransactionDto):Promise<TransactionHash> {
    return  new TransactionHash();
  }

  @ApiOperation({ summary: 'Initiate a transaction' })
  @ApiResponse({ status: 201, description: 'A new transaction has been initiated and being processed by the system.', type: BcTransactionHash })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@UsePipes(new ValidationPipe())
  @Post(`txs/ext`)
  async processBCTx(@Body() dto:TransactionDto):Promise<BcTransactionHash> {
    return  new BcTransactionHash();
  }

}
