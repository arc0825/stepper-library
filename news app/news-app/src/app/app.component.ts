import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'news-app';
  newsQuery:string='';
  modelChanged = new Subject<string>();

  constructor( private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(p=>{
      if(p['query']){
        this.newsQuery=p['query']
      }
    });
    this.modelChanged
    .pipe(
      debounceTime(300))
    .subscribe(() => {
      this.routeTo();
    })
  }
  routeTo(){
    this.router.navigate([''],{queryParams:{query:this.newsQuery}})
  }

  debounceSearch(query){
    this.newsQuery=query;
    this.modelChanged.next();
  }



}

