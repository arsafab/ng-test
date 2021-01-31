import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepWizardComponent } from './step-wizard.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleItemComponent } from './articles-list/article-item/article-item.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { SummaryBlockComponent } from './summary-block/summary-block.component';

@NgModule({
  declarations: [
    StepWizardComponent,
    ArticleItemComponent,
    ArticlesListComponent,
    CustomerFormComponent,
    SummaryBlockComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    StepWizardComponent
  ]
})
export class StepWizardModule { }
