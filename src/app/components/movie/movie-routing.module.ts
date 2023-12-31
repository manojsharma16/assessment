import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
const routes: Routes = [
  {
    path : '',
    redirectTo : 'movie-list',
    pathMatch : 'full'
  },
  {
    path:'movie-list',
    component : MovieListComponent
  },
  {
    path:'movie-detail/:id',
    component : MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
