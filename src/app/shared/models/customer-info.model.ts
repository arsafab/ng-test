export interface ICustomerInfo {
  isPrivateCustomer: boolean;
  isUseTermsChecked: boolean;
  isApprovalTermsChecked: boolean;
  isContractTermsChecked: boolean;
  email: string;
  repeatedEmail: string;
  firstName: string;
  lastName: string;
  street: string;
  houseNumber: string;
  city: string;
  zip: string;
  federalState: string;
}
