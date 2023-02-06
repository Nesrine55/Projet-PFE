import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'stage';
  public ngOnInit(){
    $(function() {
      $(".toggle").on("click", function() {
          if ($(".item").hasClass("active")) {
              $(".item").removeClass("active");
          } else {
              $(".item").addClass("active");
          }
      });
  });
  }

}
