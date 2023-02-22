import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public ngOnInit(){

    /*const box = document.getElementById('box') as HTMLElement;
    let down = false;
    
    function toggleNotifi(): void {
      if (down) {
        box.style.height = '0px';
        box.style.opacity = '0';
        down = false;
      } else {
        box.style.height = '510px';
        box.style.opacity = '1';
        down = true;
      }
    }
    
    const div = document.getElementById('.notify-icon') as HTMLElement;
    div.onclick=toggleNotifi;*/



    
      let arrow = document.querySelectorAll(".arrow");
  
  for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e: Event) => {
      let arrowParent = (e.target as Element).parentElement?.parentElement; // selecting main parent of arrow
      if (arrowParent) {
        arrowParent.classList.toggle("showMenu");
      }
    });
  }
  
  let sidebar = document.querySelector(".sidebar") as HTMLElement;
  let sidebarBtn = document.querySelector(".bx-menu") as HTMLElement;
  console.log(sidebarBtn);
  
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
  
  }


  

}
