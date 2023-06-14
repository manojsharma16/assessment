import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { catchError,map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) { 
    
  }

  getMovieList(params : any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page",params.page);
    queryParams = queryParams.append("apikey",environment.apikey);
    queryParams = queryParams.append("s",params.searchKey);
    return this.http.get<any>('http://www.omdbapi.com/',{params:queryParams}).pipe(map(res=>{
			return res;
		}),
    catchError(err=>{
      return err.error;
    })
    )
  }
  getMovieDetail(params : any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("apikey",environment.apikey);
    queryParams = queryParams.append("i",params.imdbID);
    return this.http.get<any>('http://www.omdbapi.com/',{params:queryParams}).pipe(map(res=>{
			return res;
		}),
    catchError(err=>{
      return err.error;
    })
    )
  }
}
