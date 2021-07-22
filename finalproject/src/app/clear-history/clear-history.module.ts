import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClearHistoryPageRoutingModule } from './clear-history-routing.module';

import { ClearHistoryPage } from './clear-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClearHistoryPageRoutingModule
  ],
  declarations: [ClearHistoryPage]
})
export class ClearHistoryPageModule {}
