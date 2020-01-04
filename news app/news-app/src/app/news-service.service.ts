import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class NewsService {

  constructor(private http:HttpClient) { }

  getNewsList(query:string, page:number):Observable<any>{
    let url="https://newsapi.org/v2/everything?q="+query+"&apiKey=4431db88a1064e259bd9dada6afdb282&pageSize=10&page="+page;
    return this.http.get(url);
  }
  
}
