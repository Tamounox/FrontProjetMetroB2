import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { ControleComponent } from './controle/controle.component';
import { MetroComponent } from './metro/metro.component';


const routes: Routes = [
  {
    path: 'stats',
    component: StatsComponent,
  },
  {
    path: 'metro',
    component: MetroComponent,
  },
  {
    path: 'controle',
    component: ControleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
