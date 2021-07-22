import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatesPageRoutingModule } from './coordinates-routing.module';

import { CoordinatesPage } from './coordinates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatesPageRoutingModule
  ],
  declarations: [CoordinatesPage]
})
export class CoordinatesPageModule {}
