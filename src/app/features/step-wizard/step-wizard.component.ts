import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-wizard',
  templateUrl: './step-wizard.component.html',
  styleUrls: ['./step-wizard.component.css']
})
export class StepWizardComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {

  }
}
