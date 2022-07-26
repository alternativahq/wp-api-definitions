import { Body, Controller, Get,Post } from '@nestjs/common';
import { ApiParam, ApiBearerAuth, ApiResponse, ApiOperation, ApiTags, ApiQuery, } from '@nestjs/swagger';
import { AccountCreateDto } from './dto/account-create.dto';
import { DepositDto } from './dto/deposit.dto';
import { TransactionHash } from './dto/transaction-hash.dto';


@ApiTags('wallets/')
@Controller(`wallets`)
export class WalletController {
  constructor() {}



  @ApiOperation({ summary: 'Create wallet' })
  @ApiResponse({ status: 201, description: 'The wallet has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@UsePipes(new ValidationPipe())
  @Post()
  async createWallet() {
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
  async deposit(@Body() dto:DepositDto):Promise<TransactionHash> {
    return  new TransactionHash();
  }

}
