import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { articles } from 'src/app/mocked-data';
import { IArticleItem } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private readonly articles: BehaviorSubject<IArticleItem[]> = new BehaviorSubject([]);

  constructor() {
    // TODO: Temporary solution for mocked data
    this.setArticles(articles);
  }

  public getAllArticles(): Observable<IArticleItem[]> {
    return this.articles.asObservable();
  }

  public setArticles(data: IArticleItem[]): void {
    this.articles.next(data);
  }
}
