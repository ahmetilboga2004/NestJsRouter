import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { RouterModule, Routes } from '@nestjs/core';

import { V1Module } from './api/v1/v1.module';
import { V2Module } from './api/v2/v2.module';

const routes: Routes = [
  {
    path: 'api',
    children: [
      {
        path: 'v1',
        module: V1Module,
      },
      {
        path: 'v2',
        module: V2Module,
      },
    ],
  },
];
@Module({
  imports: [RouterModule.register(routes)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
