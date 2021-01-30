import { Component, Input } from '@angular/core';
import { ArticleItem } from './article.models';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input() public readonly article: ArticleItem;
  public totalPrice = 0;
  public count: number;

  public calculatePrice(count: number): void {
    this.totalPrice = count * this.article.price;
  }
}
