import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepWizardComponent } from './step-wizard.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleItemComponent } from './articles-list/article-item/article-item.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { SummaryBlockComponent } from './summary-block/summary-block.component';
import { OrderInfoComponent } from './summary-block/order-info/order-info.component';
import { CustomerInfoComponent } from './summary-block/customer-info/customer-info.component';

@NgModule({
  declarations: [
    StepWizardComponent,
    ArticleItemComponent,
    ArticlesListComponent,
    CustomerFormComponent,
    SummaryBlockComponent,
    OrderInfoComponent,
    CustomerInfoComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    StepWizardComponent
  ]
})
export class StepWizardModule { }
