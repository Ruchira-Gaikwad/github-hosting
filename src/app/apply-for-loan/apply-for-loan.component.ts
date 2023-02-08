import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.css']
})
export class ApplyForLoanComponent {

  Nationality = ['India','Other'];
  Gender=['Male','Female'];
  Loan=['Personal Loan','Home Loan'];

  unamePattern = "^[a-z-]";
  
  
  registerForm!:FormGroup;
  submitted:boolean = false;

constructor( private formBuilder:FormBuilder){
  
}

ngOnInit(){

  
  this.registerForm =this.formBuilder.group({
    Add: ['', 
    Validators.required
  ],
  
    Name:['',[Validators.required,Validators.pattern(/^[^\d]+$/)]],
    Email:['',[Validators.required,Validators.email]],
    MobileNo: ['', [
      Validators.required,
      Validators.pattern(/^\d{10}$/)
    ]],
    Age:['',Validators.required],
    DOB:['',Validators.required],
    Adhaar: ['', [
      Validators.required,
      Validators.pattern(/^\d{12}$/)
    ]],
    ExpMonthAndYear:['', [Validators.required, this.validateDate]],
    selectControl :['', Validators.required],
    select:['', Validators.required],
    selectG:['', Validators.required],
    })
}


validateDate(registerForm: FormGroup){
  const currentDate = new Date();
    const inputDate = new Date(registerForm.value);
    if (inputDate < currentDate) {
      return { 'date': true }
    }
    return null;
}
onSubmit(){
  this.submitted= true;
  console.log("the entered form values",this.registerForm.value);
}
get h(){
 return this.registerForm.controls;
}
}
