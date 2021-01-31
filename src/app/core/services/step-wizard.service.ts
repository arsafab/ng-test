import { Injectable } from '@angular/core';
import { getMaxListeners } from 'process';
import { BehaviorSubject, Observable } from 'rxjs';
import { IOrderItem, ICustomerInfo } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class StepWizardService {
  private readonly customerInfo: BehaviorSubject<ICustomerInfo> = new BehaviorSubject({} as ICustomerInfo);
  private readonly orderInfo: BehaviorSubject<IOrderItem[]> = new BehaviorSubject([]);

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

  public updateOrderById(data: IOrderItem): void {
    const store = this.orderInfo.getValue();
    const founded = store.find(item => item.articleId === data.articleId);

    founded ? Object.assign(founded, data) : store.push(data);
    this.orderInfo.next(store);
  }
}
