import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepWizardComponent } from './step-wizard.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleItemComponent } from './articles-list/article-item/article-item.component';

@NgModule({
  declarations: [
    StepWizardComponent,
    ArticleItemComponent,
    ArticlesListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    StepWizardComponent
  ]
})
export class StepWizardModule { }
