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
  public movieData: any;
  public searchKey: any;
  public page: number = 1;
  public showLoader: boolean = false;
  public resultPerPage: any = 10;
  public optionsPerPage: any = [10, 20, 50, 'All']
  public totalRecords: number = 0;
  public totalPage: number = 0;

  constructor(private movieListService: MovieListService, private _location: Location, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (Object.keys(params).length > 0) {
        if (params['searchkey']) {
          this.searchKey = params['searchkey'];
        }
        if (params['page']) {
          this.page = params['page'];
        }
      }
    })
    this.getData();
  }

  // function for api call to ftech movie list
  getData() {
    this.movieData = [];
    this.totalRecords = 0;
    this.totalPage = 0;
    this.resultPerPage = 10;
    this.showLoader = true;
    const params = { 'page': this.page, 'searchKey': this.searchKey ? this.searchKey : 'funny' }
    this.movieListService.getMovieList(params).subscribe((res) => {
      if (res.Response != "False") {
        this.movieData = res.Search;
        // sorting data by year
        this.movieData.sort((a: any, b: any) => {
          return b.Year.split('–').join('') - a.Year.split('–').join('');
        });
        this.totalRecords = res.totalResults;
        this.totalPage = this.totalRecords / 10;
      }
      this.showLoader = false;
    })
  }

  //updates the url and get the list of movies 
  searchMovie() {
    this.page = 1;
    this.getData();
    this.updateUrl();
  }

  // reset search input
  reset() {
    this.page = 1;
    this.searchKey = '';
    this.getData();
    this.updateUrl();
  }

  //update current url on search with queryparameter
  updateUrl() {
    this.searchKey?.trim()
    if (this.searchKey) {
      this._location.go('movie-list?searchkey=' + this.searchKey + '&page=' + this.page)
    } else {
      this._location.go('movie-list?page=' + this.page)
    }
  }

  //function to show max record in single page
  dataPerPage(event: any) {
    this.resultPerPage = event.target.value;
  }

  //previous page
  prePage() {
    this.page--;
    this.updateUrl();
    this.getData();
  }

  //next page
  nextPage() {
    console.log("next page")
    this.page++;
    this.updateUrl();
    this.getData();
  }

}
