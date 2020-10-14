import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  private id: string;
  public movie: any;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.movieService.getById(this.id).subscribe(movie => {
      this.movie = movie;
    });
  }

}