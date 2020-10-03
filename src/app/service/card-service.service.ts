import { CardInterface } from './../model/card-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  constructor(private _http: HttpClient) {}
  getData() {
    return this._http
      .get<CardInterface[]>(
        'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=78c4334ef06440efa441dae319905533'
      )
      .pipe(map((res: any) => res.articles));
  }
}
