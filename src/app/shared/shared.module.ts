import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const components = []

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ...components
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
