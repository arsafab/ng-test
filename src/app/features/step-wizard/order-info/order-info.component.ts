import { Component, Input } from '@angular/core';
import { IOrderItem } from 'src/app/shared/models';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent {
  @Input() public readonly order: IOrderItem;
}
