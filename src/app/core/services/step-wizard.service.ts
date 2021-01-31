import { Injectable } from '@angular/core';
import { getMaxListeners } from 'process';
import { BehaviorSubject, Observable } from 'rxjs';
import { IOrderItem, ICustomerInfo } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class StepWizardService {
  private readonly customerInfo: BehaviorSubject<ICustomerInfo> = new BehaviorSubject(null);
  private readonly orderInfo: BehaviorSubject<IOrderItem[]> = new BehaviorSubject(null);

  constructor() {
    // TODO: temporary solution for building summary block layout
    this.setCustomerInfo({
      isPrivateCustomer: true,
      isUseTermsChecked: true,
      isApprovalTermsChecked: true,
      isContractTermsChecked: true,
      email: 'test@gmail.com',
      repeatedEmail: 'test@gmail.com',
      firstName: 'test',
      lastName: 'test',
      street: 'test',
      houseNumber: 'test',
      city: 'test',
      zip: 'test',
      federalState: 'test'
    });
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

  public getCustomerInfo(): Observable<ICustomerInfo> {
    return this.customerInfo.asObservable();
  }

  public getOrderInfo(): Observable<IOrderItem[]> {
    return this.orderInfo.asObservable();
  }

  public setCustomerInfo(data: ICustomerInfo): void {
    this.customerInfo.next(data);
  }

  public setOrderInfo(data: IOrderItem[]): void {
    this.orderInfo.next(data);
  }
}
