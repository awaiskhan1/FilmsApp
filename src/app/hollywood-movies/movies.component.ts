import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MovieServiceService } from './../movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  hollywood: Array<any>;
  copyHollywoods: Array<any>;
  myval = this.copyHollywoods;
  errorMessage;

  constructor( private router: Router, private Service: MovieServiceService) {}

  liked(i: number) {
    if (this.hollywood[i].liked === 0) {
      this.hollywood[i].liked = 1;
    } else {
      this.hollywood[i].liked = 0;
    }
  }

  filter(filt: string) {
    switch (filt) {
        case 'all':
          this.hollywood = this.copyHollywoods;
        break;
        case filt:
          this.hollywood = this.copyHollywoods;
          this.hollywood = this.hollywood.filter(filmtype => {
          return filmtype.genre.toLowerCase().includes(filt);
        });
        break;
    }
  }
  filterByYear(filt: string) {
    switch (filt) {
        case 'all':
          this.hollywood = this.copyHollywoods;
        break;
        case filt:
          this.hollywood = this.copyHollywoods;
          this.hollywood = this.hollywood.filter(filmtype => {
            return filmtype.year.toLowerCase().includes(filt);
          });
        break;
    }
  }
  sortby(sort: string) {
    if (sort === 'title') {
      this.hollywood.sort(this.sortName);
    }
    if (sort === 'highRating') {
      this.hollywood.sort(this.sortByDateAsc);
    }
    if (sort === 'lowRating') {
      this.hollywood.sort(this.sortLowRatting);
      console.log('low rating sort are appled');
    }
    if (sort === 'liked') {
      this.hollywood.sort(this.sortLiked);
    }
  }
  sortHighRatting(a, b) {
    if (a.ImdbRating < b.ImdbRating) { return -1; }
    if (a.ImdbRating > b.ImdbRatinge) { return 1; }
    return 0;
  }
  sortLowRatting(a, b) {
    return a.ImdbRating - b.ImdbRating;
  }
  sortByDateAsc = function (lhs, rhs)  { return lhs.Released > rhs.Released ? 1 : lhs.Released < rhs.Released ? -1 : 0; };

  sortLiked(a, b) {
    if (a.liked > b.liked) { return -1; }
    if (a.liked < b.liked) { return 1; }
    return 0;
  }
  sortName(a, b) {
    if (a.title < b.title) { return -1; }
    if (a.title > b.title) { return 1; }
    return 0;
  }

  ngOnInit() {
    this.Service.getHollywoodMovies()
    .subscribe(
      res => this.hollywood = res,
      error => this.errorMessage = <any>error,
      () => this.copyHollywoods = this.hollywood );
    }
}
