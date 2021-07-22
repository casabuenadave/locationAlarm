import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateAlarmPageRoutingModule } from './activate-alarm-routing.module';

import { ActivateAlarmPage } from './activate-alarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateAlarmPageRoutingModule
  ],
  declarations: [ActivateAlarmPage]
})
export class ActivateAlarmPageModule {}
