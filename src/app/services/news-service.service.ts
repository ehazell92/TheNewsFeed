import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { INewsPack } from '../models/news-model';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  private country = 'us';
  private apiK = 'cb43643ab06446c7888e79a946e142cd';

  constructor(private http: HttpClient) { }

  getNews(): Observable<INewsPack[]> {
    const baseURL = 'https://newsapi.org/v2/top-headlines?' +
                    'country=us&' +
                    'apiKey='+ this.apiK;
    return this.http.get<INewsPack[]>(baseURL).pipe(
      tap(data => console.log('Fetching the News')),
      catchError(this.handleError)
    );

    // var req = new Request(url);
    // fetch(req)
    //   .then(function (response) {
    //     console.log(response.json());
    //   })

  }
  private handleError(err: HttpErrorResponse) {
    const errorMessage = '';
    console.log(errorMessage);
    return throwError(errorMessage);
  }  
}
