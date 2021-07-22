import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'saved-alarm',
    loadChildren: () => import('./saved-alarm/saved-alarm.module').then( m => m.SavedAlarmPageModule)
  },
  {
    path: 'set-alarm',
    loadChildren: () => import('./set-alarm/set-alarm.module').then( m => m.SetAlarmPageModule)
  },
  {
    path: 'activate-alarm',
    loadChildren: () => import('./activate-alarm/activate-alarm.module').then( m => m.ActivateAlarmPageModule)
  },
  {
    path: 'deactivate-alarm',
    loadChildren: () => import('./deactivate-alarm/deactivate-alarm.module').then( m => m.DeactivateAlarmPageModule)
  },
  {
    path: 'coordinates',
    loadChildren: () => import('./coordinates/coordinates.module').then( m => m.CoordinatesPageModule)
  },
  {
    path: 'clear-history',
    loadChildren: () => import('./clear-history/clear-history.module').then( m => m.ClearHistoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
