import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() theNewsPack: any;
  rTitle: string;
  rAuthor: string;
  rName: string;
  rDesc: string;

  constructor() { }

  ngOnInit() {
    this.rTitle = '';
    this.rAuthor = '';
    this.rName = '';
    this.rDesc = '';
  }

}
