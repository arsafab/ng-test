import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArticleItem, IOrderItem } from 'src/app/shared/models';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Output() public readonly orderChanged: EventEmitter<IOrderItem> = new EventEmitter();
  @Input() public readonly article: IArticleItem;
  public totalPrice = 0;
  public count: number;

  public calculatePrice(count: number): void {
    this.totalPrice = count * this.article.price;
    this.orderChanged.emit({
      ...this.article,
      count
    });
  }
}
