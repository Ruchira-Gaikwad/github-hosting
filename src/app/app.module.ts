import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ApplyForLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   FormsModule,
    ReactiveFormsModule,
  [BsDatepickerModule.forRoot()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
