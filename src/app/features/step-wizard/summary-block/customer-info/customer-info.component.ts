import { Component, Input } from '@angular/core';
import { ICustomerInfo } from 'src/app/shared/models';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent {
  @Input() public readonly customer: ICustomerInfo;
}
