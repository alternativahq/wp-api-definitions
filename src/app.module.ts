import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletController } from './api/wallet/wallet.controller';
import { GameActivityController } from './api/game/game-activity.controller';
import { GameServerController } from './api/game-server/game-server.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
      exclude: ['/api*','api*'],
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, WalletController, GameActivityController,GameServerController],
  providers: [AppService],
})
export class AppModule {}
