import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepWizardService } from 'src/app/core/services/step-wizard.service';
import { ICustomerInfo, IOrderItem } from 'src/app/shared/models';

@Component({
  selector: 'app-summary-block',
  templateUrl: './summary-block.component.html',
  styleUrls: ['./summary-block.component.css']
})
export class SummaryBlockComponent implements OnInit {
  public orderInfo$: Observable<IOrderItem[]>;
  public customerInfo$: Observable<ICustomerInfo>;

  constructor(private readonly stepWizardService: StepWizardService) {}

  public ngOnInit(): void {
    this.customerInfo$ = this.stepWizardService.getCustomerInfo();
    this.orderInfo$ = this.stepWizardService.getOrderInfo();
  }
}
