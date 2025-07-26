import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  loginfrom:FormGroup;
  constructor(private fb:FormBuilder,private userService:User,private router:Router){
    this.loginfrom=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(3)]]
    })
  }
  username:string='';
  password:string='';
  login() {
    const loggeduser= this.userService.login(this.username,this.password);
    if(loggeduser){
      console.log("login successful")
      this.userService.setlogeduser(loggeduser);
      this.router.navigate(['/posts']);
    }else{console.log("invalid user name or password")}
}
}
