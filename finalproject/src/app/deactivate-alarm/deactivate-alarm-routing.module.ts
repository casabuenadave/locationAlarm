import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeactivateAlarmPage } from './deactivate-alarm.page';

const routes: Routes = [
  {
    path: '',
    component: DeactivateAlarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeactivateAlarmPageRoutingModule {}
