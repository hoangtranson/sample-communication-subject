import { Injectable } from '@angular/core';
import { Article } from './article.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  latestArticle: Article = {
    "id": 0,
    "title": "XXX",
    "body": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  };
  private inventorySubject$ = new BehaviorSubject<Article>(this.latestArticle);
  inventoryChanged$ = this.inventorySubject$.asObservable();

  constructor() { }

  addToInventory(article: Article) {
    this.latestArticle = article;
    this.inventorySubject$.next(article);
  }
}
