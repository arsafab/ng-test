import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { IArticleItem } from 'src/app/shared/models';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  public articles$: Observable<IArticleItem[]>;

  constructor(private readonly articlesService: ArticlesService) {}

  public ngOnInit(): void {
    this.articles$ = this.articlesService.getAllArticles();
  }
}
