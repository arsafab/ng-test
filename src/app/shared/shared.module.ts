import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

const components = [];
const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class SharedModule { }
