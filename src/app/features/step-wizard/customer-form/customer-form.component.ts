import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FederalStates } from 'src/app/shared/constants';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit, OnDestroy {
  @Output() public readonly valid: EventEmitter<boolean> = new EventEmitter();
  public form: FormGroup;
  public federalStates = FederalStates;

  private readonly subscriptions: Subscription = new Subscription();

  constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      isPrivateCustomer: [true],
      isUseTermsChecked: [false, Validators.required],
      isApprovalTermsChecked: [false, Validators.required],
      isContractTermsChecked: [false, Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      repeatedEmail: ['', [ Validators.required, this.checkEmailValidator ]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      federalState: ['', Validators.required]
    });

    this.subscriptions.add(
      this.form.valueChanges.subscribe(changes => {
        this.valid.emit(this.form.valid);
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private checkEmailValidator = (): { notSame: boolean } | null => {
    const email = this.form?.get('email').value;
    const confirmedEmail = this.form?.get('repeatedEmail')?.value;

    return email === confirmedEmail ? null : { notSame: true };
  }
}
