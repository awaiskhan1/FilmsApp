import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MoviesComponent } from './hollywood-movies/movies.component';
import { MovieSingleComponent } from './hollywood-movies/hollywood-movie-single/movie-single.component';

import { MovieServiceService } from './movie-service.service';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { BollywoodComponent } from './bollywood/bollywood.component';
import { BollywoodMovieSingleComponent } from './bollywood/bollywood-movie-single/bollywood-movie-single.component';

const appRoutes: Routes = [
  { path: 'hollywoodMovieDetails/:id', component: MovieSingleComponent },
  { path: 'hollywoodMovies', component: MoviesComponent },
  { path: 'bollywoodMovieDetails/:id', component: BollywoodMovieSingleComponent },
  { path: 'bollywoodMovies', component: BollywoodComponent },
  { path: '',  redirectTo: 'MoviesComponent', pathMatch: 'full' }
  // { path: '**',  component: NotFoundPageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieSingleComponent,
    NotFoundPageComponent,
    BollywoodComponent,
    BollywoodMovieSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

