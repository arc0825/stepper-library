import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs/internal/observable/timer';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsList = [];
  query: string = '';
  page: number = 1;
  totalPages: number = 0;
  unlisten: () => void;
  time = 30;
  interval = interval(1000);
  autoRefreshTimer: Observable<number> = timer(30000, 30000);
  unSubscribe: Subscription;
  constructor(private newsService: NewsService, private router: ActivatedRoute, private rd: Renderer2) { }

  ngOnInit() {
    this.router.queryParams.subscribe(p => {
      if (p['query']) {
        this.query = p['query'];
        this.totalPages = 1;
        this.page = 1;
        // document.documentElement.scrollTop=0;
        this.getNewsList();

      }
    });


   //for infinite scroll
    this.unlisten = this.rd.listen(window, 'scroll', (e) => {
      if (Math.ceil(window.scrollY + window.innerHeight) == document.documentElement.scrollHeight){
        this.page++;
        this.getNewsList();

      }
    })
  }

  //show auto refresh timer
  renderTimer() {
    if (this.unSubscribe)
      this.unSubscribe.unsubscribe();

    this.unSubscribe = this.interval.pipe(takeUntil(this.autoRefreshTimer)).subscribe(r => {
      this.time--;
    },
      () => { },
      () => {
        this.getNewsList();
      })
  }

  //populate newslist[] with articles from news api
  getNewsList() {

    if (this.page <= this.totalPages) {
      this.newsService.getNewsList(this.query, this.page).subscribe(news => {
        if (this.page == 1) {
          this.newsList = [];
          this.totalPages = Math.round(news.totalResults / 10);
        }
        this.newsList.push(...news.articles);
        this.time = 30;
        this.renderTimer();
      })
    }

  }

  ngOnDestroy() {
    // destroy all listeners and subscription
    this.unlisten();
    this.unSubscribe.unsubscribe();
  }


}

