import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';


@NgModule({
  declarations: [
    StudentComponent,
    DashboardpageComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
