import { IArticleItem } from './article.models';

export interface IOrderItem extends IArticleItem {
  count: number;
}
