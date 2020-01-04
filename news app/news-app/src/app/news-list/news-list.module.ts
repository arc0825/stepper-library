import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { NewsService } from '../news-service.service';

@NgModule({
  declarations: [NewsListComponent],
  imports: [
    CommonModule
  ],
  exports:[NewsListComponent],
  providers:[NewsService]
})
export class NewsListModule { }
