import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  { path: 'movie/:id', component: MovieCardComponent },
  { path: 'movie', component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
