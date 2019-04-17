import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CurriculumComponent} from './pages/curriculum/curriculum.component';
import {StatisticsComponent} from './pages/statistics/statistics.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent },
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
