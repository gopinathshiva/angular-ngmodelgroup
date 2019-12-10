
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

/*
  1. <fieldset ngModelGroup="address">  add address control object to form
  2. <fieldset [attr.ngModelGroup]="true ? 'address' : null">  not working
  3. <fieldset [ngModelGroup]="false ? 'address' : null">  

  so how to make ngModelGroup optional here ????

  expected form object:

  {
    "firstName": "",
    "lastName": "",
    "zip": "",
    "street": "",
    "city": ""
  }
*/

@Component({
  selector: 'address',
  template: `
    <fieldset [ngModelGroup]="false ? 'address' : null">
      <div>
        <label>Zip:</label>
        <input type="text" name="zip" ngModel>
      </div>
      <div>
        <label>Street:</label>
        <input type="text" name="street" ngModel>
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" ngModel>
      </div>
    </fieldset>
  `,
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class AddressComponent  {}
