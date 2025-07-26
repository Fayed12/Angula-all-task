import { inject, Injectable } from '@angular/core';
import { User } from './user';
import { Router,CanActivateFn } from '@angular/router';

export const authguard:CanActivateFn=()=>{
  const userService = inject(User);
  const router = inject(Router);
  if(userService.Authenticated()){
    return true;
  }
  router.navigate(['/login'])
  return false;
}
