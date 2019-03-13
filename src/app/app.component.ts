import { Component, OnInit, ElementRef } from '@angular/core';
import { NewsServiceService } from '../app/services/news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsServiceService]
})
export class AppComponent implements OnInit {
  title = 'TheNewsFeed';
  theNewsPack: any;

  constructor(private newsService: NewsServiceService, private elRef: ElementRef) {
    elRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    elRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
    elRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/foggy-birds.png")';
    elRef.nativeElement.ownerDocument.body.style.position = 'absolute';
    elRef.nativeElement.ownerDocument.body.style.width = '100vW';
    elRef.nativeElement.ownerDocument.body.style.height = '100vH';    
  }
  ngOnInit() {
    this.newsService.getNews().subscribe(
      newsP => {
        this.theNewsPack = newsP;
        console.log(this.theNewsPack);
      },
    );
  }
}
