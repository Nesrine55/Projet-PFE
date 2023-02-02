import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-mailvalidation',
  templateUrl: './mailvalidation.component.html',
  styleUrls: ['./mailvalidation.component.css']
})
export class MailvalidationComponent {
  /*public ngOnInit(){
    const otp= document.querySelectorAll('.otp-field');

    otp[0].focus();
    otp.forEach((field,index) => {
      field.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9){
          otp[index].value="";
          setTimeout(() =>{
            otp[index+1].focus();
          }, 4);
        }
        else if(e.key === 'backspace'){
          setTimeout(() =>{
            otp[index-1].focus();
          }, 4);
        }


      });
    });
  }*/
  emailForm: FormGroup;
  email: String | undefined;

constructor(private formBuilder: FormBuilder) {
  this.emailForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });
}

validateEmail() {
  if (this.emailForm.valid) {
    // send OTP to the email


  }
}
}
