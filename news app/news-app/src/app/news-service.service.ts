import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { environment} from '../environments/environment.prod'

@Injectable()
export class NewsService {

  constructor(private http:HttpClient) { }

  getNewsList(query:string, page:number):Observable<any>{
    let url="https://newsapi.org/v2/everything?q="+query+"&apiKey="+environment.apiKey+"&pageSize=10&page="+page;
    return this.http.get(url);
  }
  
}
