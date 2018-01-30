import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieServiceService } from './../../movie-service.service';

@Component({
  selector: 'app-bollywood-movie-single',
  templateUrl: './bollywood-movie-single.component.html',
  styleUrls: ['./bollywood-movie-single.component.css']
})
export class BollywoodMovieSingleComponent implements OnInit {

  id: number;
  private subs: any;

  constructor(private route: ActivatedRoute, private router: Router, private Service: MovieServiceService) {
    this.id = route.snapshot.params['id'];
  }
  ngOnInit() {
    this.Service.getBollywoodMovie(this.id).subscribe(res => this.subs = res);
  }
  onBack() {
    this.router.navigate(['/bollywoodMovies']);
  }


}
