import { Component } from '@angular/core';
import { articles } from 'src/app/mocked-data';
import { ArticleItem } from './article-item/article.models';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent {
  public articles: ArticleItem[] = articles;
}
