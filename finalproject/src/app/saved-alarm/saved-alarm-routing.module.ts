import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedAlarmPage } from './saved-alarm.page';

const routes: Routes = [
  {
    path: '',
    component: SavedAlarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedAlarmPageRoutingModule {}
