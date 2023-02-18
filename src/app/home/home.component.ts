import { Component,AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {
  
 ngAfterViewInit(): void {


  const images = ['/assets/pic1.jpg', '/assets/pic2.jpeg', '/assets/pic3.png', '/assets/pic4.jpg'];
  let i = 0;
  const sliderImg = document.querySelector('.sliderImg') as HTMLImageElement;
  var len = images.length;
  
  function slider() {
    if (i > len - 1) {
      i = 0;
    }
    sliderImg.src = images[i];
    i++;
  }
  
  setInterval(slider, 3000);
   


        
  }

}
