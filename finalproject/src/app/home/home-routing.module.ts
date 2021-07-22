import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagePage } from '../homepage/homepage.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '',
    component: HomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
