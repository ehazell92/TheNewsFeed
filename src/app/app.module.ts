import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { NewsItemComponent } from './components/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
