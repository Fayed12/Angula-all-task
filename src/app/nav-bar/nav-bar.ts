import { Component } from '@angular/core';
import { User } from '../services/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  constructor(public userservice:User,private router: Router){}
  logout() {
    this.userservice.logout();
    this.router.navigate(['/login']);
  }
}
