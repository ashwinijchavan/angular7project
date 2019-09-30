import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { LoginComponent } from './login/login.component';
import { Body1Component } from './body-container/body1/body1.component';
import { Body2Component } from './body-container/body2/body2.component';
import { ReactiveFormsModule} from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BodyContainerComponent,
    LoginComponent,
    Body1Component,
    Body2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
