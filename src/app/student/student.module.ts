import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderStudentComponent } from './header-student/header-student.component';


@NgModule({
  declarations: [
    StudentComponent,
    DashboardpageComponent,
    SidenavComponent,
    HeaderStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
