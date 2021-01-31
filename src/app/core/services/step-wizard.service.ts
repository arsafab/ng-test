import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IOrderItem, CustomerInfo } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class StepWizardService {
  private readonly customerInfo: BehaviorSubject<CustomerInfo> = new BehaviorSubject(null);
  private readonly orderInfo: BehaviorSubject<IOrderItem[]> = new BehaviorSubject(null);

  constructor() {
    // TODO: temporary solution for building summary block layout
    this.setCustomerInfo({} as CustomerInfo);
    this.setOrderInfo([
      {
        articleId: '1',
        count: 2,
        price: 32.80,
        date: new Date(),
        description: '',
        title: 'Test'
      }
    ]);
  }

  public getCustomerInfo(): Observable<CustomerInfo> {
    return this.customerInfo.asObservable();
  }

  public getOrderInfo(): Observable<IOrderItem[]> {
    return this.orderInfo.asObservable();
  }

  public setCustomerInfo(data: CustomerInfo): void {
    this.customerInfo.next(data);
  }

  public setOrderInfo(data: IOrderItem[]): void {
    this.orderInfo.next(data);
  }
}
