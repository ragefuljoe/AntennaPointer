import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'fintsattelite', loadChildren: './fintsattelite/fintsattelite.module#FintsattelitePageModule' },
  { path: 'point-north', loadChildren: './point-north/point-north.module#PointNorthPageModule' },
  { path: 'point-north-start', loadChildren: './point-north-start/point-north-start.module#PointNorthStartPageModule' },
  { path: 'point-up-intro', loadChildren: './point-up-intro/point-up-intro.module#PointUpIntroPageModule' },
  { path: 'point-up-start', loadChildren: './point-up-start/point-up-start.module#PointUpStartPageModule' },
  { path: 'end', loadChildren: './end/end.module#EndPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
