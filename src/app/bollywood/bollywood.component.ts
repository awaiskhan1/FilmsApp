import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MovieServiceService } from './../movie-service.service';


@Component({
  selector: 'app-bollywood',
  templateUrl: './bollywood.component.html',
  styleUrls: ['./bollywood.component.css']
})
export class BollywoodComponent implements OnInit {


  bollywood: Array<any>;
  copyBollywoods: Array<any>;
  myval = this.copyBollywoods;
  errorMessage;

  constructor( private router: Router, private Service: MovieServiceService) {}

  liked(i: number) {
    if (this.bollywood[i].liked === 0) {
      this.bollywood[i].liked = 1;
    } else {
      this.bollywood[i].liked = 0;
    }
  }

  filter(filt: string) {
    switch (filt) {
        case 'all':
          this.bollywood = this.copyBollywoods;
        break;
        case filt:
          this.bollywood = this.copyBollywoods;
          this.bollywood = this.bollywood.filter(filmtype => {
          return filmtype.genre.toLowerCase().includes(filt);
        });
        break;
    }
  }

  filterByYear(filt: string) {
    switch (filt) {
        case 'all':
          this.bollywood = this.copyBollywoods;
        break;
        case filt:
          this.bollywood = this.copyBollywoods;
          this.bollywood = this.bollywood.filter(filmtype => {
            return filmtype.year.toLowerCase().includes(filt);
          });
        break;
    }
  }
  sortby(sort: string) {
    if (sort === 'title') {
      this.bollywood.sort(this.sortName);
    }
    if (sort === 'highRating') {
      this.bollywood.sort(this.sortByDateAsc);
    }
    if (sort === 'lowRating') {
      this.bollywood.sort(this.sortLowRatting);
      console.log('low rating sort are appled');
    }
    if (sort === 'liked') {
      this.bollywood.sort(this.sortLiked);
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
    this.Service.getBollywoodMovies()
    .subscribe(
      res => this.bollywood = res,
      error => this.errorMessage = <any>error,
      () => this.copyBollywoods = this.bollywood );
    }

}
