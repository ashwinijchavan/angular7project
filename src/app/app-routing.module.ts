import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { Body1Component } from './body-container/body1/body1.component';
import { Body2Component } from './body-container/body2/body2.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full'  },
    { path: 'login', component: LoginComponent},
    
    { path: 'home', component: BodyContainerComponent,
    children: [
      { path: '', redirectTo: 'body1', pathMatch: 'full'  },

      { path: 'body1', component: Body1Component},
      { path: 'body2', component: Body2Component},
    ]
  
    }
   
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
