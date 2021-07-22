import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeactivateAlarmPageRoutingModule } from './deactivate-alarm-routing.module';

import { DeactivateAlarmPage } from './deactivate-alarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeactivateAlarmPageRoutingModule
  ],
  declarations: [DeactivateAlarmPage]
})
export class DeactivateAlarmPageModule {}
