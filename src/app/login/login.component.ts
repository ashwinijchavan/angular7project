import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private router: Router,
               private formBuilder: FormBuilder) { }

  public loginForm : FormGroup;
  login(){
    
    let userName = this.loginForm.get(['uname']).value;
    let password = this.loginForm.get(['upass']).value;

    if(this.loginForm.valid && userName == 'admin' && password == 'admin'){
      
      alert('User form is valid!!')
      this.router.navigate(['home'])

    } else {
      
      alert('User form is not valid!!')
    }
    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      uname:['', [Validators.required]],
      upass:['']
    })
  }
 
}
