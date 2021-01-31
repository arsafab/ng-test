import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IOrderInfo, CustomerInfo } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class StepWizardService {
  private readonly customerInfo: BehaviorSubject<any> = new BehaviorSubject({});
  private readonly orderInfo: BehaviorSubject<any> = new BehaviorSubject({});

  public getCustomerInfo(): Observable<CustomerInfo> {
    return this.customerInfo.asObservable();
  }

  public getOrderInfo(): Observable<IOrderInfo> {
    return this.orderInfo.asObservable();
  }

  public setCustomerInfo(data: CustomerInfo): void {
    this.customerInfo.next(data);
  }

  public setOrderInfo(data: IOrderInfo): void {
    this.orderInfo.next(data);
  }
}
