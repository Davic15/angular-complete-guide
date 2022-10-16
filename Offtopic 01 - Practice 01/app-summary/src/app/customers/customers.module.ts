import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customer-list/customer-list.component';
import { FilterTextboxComponent } from './customer-list/filter-textbox-component';

//* We import commonModule in our child component, and BrowserModule just once in the app.
@NgModule({
  declarations: [
    CustomersComponent, CustomersListComponent, FilterTextboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }