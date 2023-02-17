import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { LoginnnComponent } from './loginnn/loginnn.component';
import { MailvalidationComponent } from './mailvalidation/mailvalidation.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    DiscoverComponent,
    AboutComponent,
    HelpComponent,
    ContactComponent,
    JoinusComponent,
    LoginComponent,
    LoginnnComponent,
    MailvalidationComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
