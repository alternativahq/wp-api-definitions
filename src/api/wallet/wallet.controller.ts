import { Body, Controller, Get,Param,ParseIntPipe,Post, Query } from '@nestjs/common';
import { ApiParam, ApiBearerAuth, ApiResponse, ApiOperation, ApiTags, ApiQuery, } from '@nestjs/swagger';
import { AccountCreateDto } from './dtos/account-create.dto';
import { WalletCreateDto } from './dtos/wallet-create.dto';
import { AssetEnum } from './transaction/dtos/asset.enum';
import { SendTransactionRequestDto } from './transaction/dtos/send-transaction.request.dto';
import { TransactionStateEnum } from './transaction/dtos/tansaction-state.enum';
import { TransactionTypeEnum } from './transaction/dtos/tansaction-type.enum';
import { TransactionDto } from './transaction/dtos/tansaction.dto';
import { TransactionIdDto } from './transaction/dtos/transaction-identifier.dto';
import { TransactionLogDto } from './transaction/dtos/transaction-log.dto';
import { TransactionScopeEnum } from './transaction/dtos/transaction-scope.enum';


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
  @ApiResponse({ status: 201, description: 'A new transaction has been initiated and being processed by the system.', type: TransactionIdDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@UsePipes(new ValidationPipe())
  @Post(`txs/`)
  async processTx(@Body() dto:SendTransactionRequestDto):Promise<TransactionIdDto> {
    return  new TransactionIdDto(``,``);
  }
  

  @ApiOperation({ summary: 'Initiate a transaction' })
  @ApiResponse({ status: 201, description: 'A new transaction has been initiated and being processed by the system.', type: TransactionIdDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  //@UsePipes(new ValidationPipe())
  @Post(`txs/ext`)
  async processBCTx(@Body() dto:TransactionDto):Promise<TransactionIdDto> {
    return  new TransactionIdDto(``,``);
  }

  @ApiOperation({ summary: 'Find all transactions' })
  @ApiResponse({ status: 200, description: 'Return transactions by the given pagination and filer.', type: TransactionDto, isArray:true })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiQuery({name:`type`, enum:TransactionTypeEnum, })
  @ApiQuery({name:`state`, enum:TransactionStateEnum, })
  @ApiQuery({name:`asset`, enum:AssetEnum, })
  @ApiQuery({name:`scope`, enum:TransactionScopeEnum, })
  @Get('txs/')
  async findAllTransactions(@Query(`globalTxId`) globalTxId:string, @Query(`tenantId`) tenantId:string,
    @Query(`refId`) refId:string,@Query(`hash`) hash:string, @Query(`type`) type:TransactionTypeEnum,
    @Query(`state`) state:TransactionStateEnum, @Query(`asset`) asset:AssetEnum,
    @Query(`fromAccountId`) fromAccountId:string, @Query(`toAccountId`) toAccountId:string,
    @Query(`scope`) scope:TransactionScopeEnum,
    @Query(`firstRecord`) firstRecord:string, @Query(`lastRecord`) lastRecord:string,): Promise<TransactionDto[]> {
    return null;
  }

  @ApiOperation({ summary: 'Find a transaction by the given transaction id' })
  @ApiResponse({ status: 200, description: 'Return the transaction found by the given id.', type: TransactionDto})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('txs/:id')
  async findTransactionByid(@Param('id') id: string) : Promise<TransactionDto>  {
    return null;
  }


  @ApiOperation({ summary: 'Find a transaction log by the given transaction id' })
  @ApiResponse({ status: 200, description: 'Return the transaction log found by the given id.', type: TransactionLogDto})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('txs/logs/:id')
  async findTransctionLog(@Param('id') id: string) : Promise<TransactionLogDto> {
    return null;
  }

}
