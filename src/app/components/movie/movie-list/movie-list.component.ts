import { Component } from '@angular/core';
import { MovieListService } from '../movie-list.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  public movieData : any;
  public searchKey : any = '';
  public page : number = 1;
  public showLoader : boolean = false;
  constructor(private movieListService : MovieListService,private _location: Location,private activatedRoute : ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(params=>{
      if(Object.keys(params).length > 0){
        this.searchKey = params['searchkey'];
      }
    })
    this.getData();  
  }
  getData(){
    this.showLoader = true;
    const params = {'page':this.page,'searchKey' : this.searchKey}
    this.movieListService.getMovieList(params).subscribe((res)=>{
      if(res.Response){
        this.movieData = res.Search;
      }
      this.showLoader = false;
    })
  }

  searchMovie(){
    this.getData();
    this.updateUrl();
  }
  reset(){
    this.searchKey = '';
    this.getData();
    this.updateUrl();
  }
  updateUrl() {
    this.searchKey.trim()
    if(this.searchKey){
      this._location.go('movie-list?searchkey='+this.searchKey)
    }else{
      this._location.go('movie-list')
    }
    
  }
}
