import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../app/services/news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TheNewsFeed';
  theNewsPack: any;

  constructor(private newsService: NewsServiceService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(
      newsP => {
        this.theNewsPack = newsP;
        console.log('Got the weather!');
        console.log(this.theNewsPack);
      },
    );
  }
}
