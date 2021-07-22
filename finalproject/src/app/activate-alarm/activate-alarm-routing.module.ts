import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateAlarmPage } from './activate-alarm.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateAlarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateAlarmPageRoutingModule {}
