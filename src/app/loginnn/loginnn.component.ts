import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-loginnn',
  templateUrl: './loginnn.component.html',
  styleUrls: ['./loginnn.component.css']
})
export class LoginnnComponent {
  public ngOnInit(){
    const signUpButton: HTMLElement = document.getElementById('signUp')!;
    const signInButton: HTMLElement = document.getElementById('signIn')!;
    const container: HTMLElement = document.getElementById('container')!;
    
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
    $(document).ready(function () {

      'use strict';
  
      var emailError    = true,
          passwordError = true,
          passConfirm   = true;
  
  
      // Form validation
      $('input').blur(function (this:any) {
  
          // Email
          if ($(this).hasClass('email')) {
              if ($(this).val().length == '') {
                  $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
                  emailError = true;
              } else {
                  $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                  emailError = false;
              }
          }
  
          // PassWord
          if ($(this).hasClass('pass')) {
              if ($(this).val().length < 8) {
                  $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
                  passwordError = true;
              } else {
                  $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                  passwordError = false;
              }
          }
  
          // PassWord confirmation
          if ($('.pass').val() !== $('.passConfirm').val()) {
              $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
              passConfirm = false;
          } else {
              $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
              passConfirm = false;
          }
  
  
  
  });
  });
  
  
  }
}
