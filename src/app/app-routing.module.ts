import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DiscoverComponent } from './discover/discover.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { LoginnnComponent } from './loginnn/loginnn.component';
import { MailvalidationComponent } from './mailvalidation/mailvalidation.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'discover',component:DiscoverComponent},
  {path:'help',component:HelpComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'joinus',component:JoinusComponent},
  {path:'login',component:LoginComponent},
  {path:'loginnn',component:LoginnnComponent},
  {path:'mailvalidation',component:MailvalidationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
