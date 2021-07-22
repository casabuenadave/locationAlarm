import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedAlarmPageRoutingModule } from './saved-alarm-routing.module';

import { SavedAlarmPage } from './saved-alarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedAlarmPageRoutingModule
  ],
  declarations: [SavedAlarmPage]
})
export class SavedAlarmPageModule {}
