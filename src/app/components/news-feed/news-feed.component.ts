import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  @Input() theNewsPack: any;

  constructor() { }

  ngOnInit() {
  }

}
