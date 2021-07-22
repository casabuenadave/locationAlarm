import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClearHistoryPage } from './clear-history.page';

const routes: Routes = [
  {
    path: '',
    component: ClearHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClearHistoryPageRoutingModule {}
