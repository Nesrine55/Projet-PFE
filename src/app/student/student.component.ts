import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public ngOnInit(){
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
