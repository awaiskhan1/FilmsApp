import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieServiceService } from './../../movie-service.service';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.css']
})
export class MovieSingleComponent implements OnInit {
  id: number;
  private subs: any;

  constructor(private route: ActivatedRoute, private router: Router, private Service: MovieServiceService) {
    this.id = route.snapshot.params['id'];
  }
  ngOnInit() {
    this.Service.getHollywoodMovie(this.id).subscribe(res => this.subs = res);
  }
  onBack() {
    this.router.navigate(['/hollywoodMovies']);
  }


}
