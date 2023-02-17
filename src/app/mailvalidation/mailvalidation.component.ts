import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-mailvalidation',
  templateUrl: './mailvalidation.component.html',
  styleUrls: ['./mailvalidation.component.css']
})
export class MailvalidationComponent {
  public ngOnInit(){

    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("button") as HTMLButtonElement;
    inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
    
    const currentInput = input as HTMLInputElement;
    const nextInput = input.nextElementSibling as HTMLInputElement | null;
    const prevInput = input.previousElementSibling as HTMLInputElement | null;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    
    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", "true");
          input.value = "";
          prevInput.focus();
        }
      });
    }
    
    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});

window.addEventListener("load", () => (inputs[0] as HTMLInputElement).focus());


}}
