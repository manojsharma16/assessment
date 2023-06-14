import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieListService } from '../movie-list.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  public imdbID: any ;
  public movieData : any;
  public showLoader : boolean = false;
  constructor(private activatedRoute : ActivatedRoute, private movieListService : MovieListService){
    this.activatedRoute.params.subscribe(params=>{
      if(Object.keys(params).length > 0){
        this.imdbID = params['id'];
      }
    })
    this.getMovieDetail();
  }

  getMovieDetail(){
    this.showLoader = true;
    const params = {'imdbID':this.imdbID}
    this.movieListService.getMovieDetail(params).subscribe((res)=>{
      if(res.Response){
        this.movieData = res;
      }
      this.showLoader = false;
    })
  }
}
