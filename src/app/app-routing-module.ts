import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Posts } from './posts/posts';
import { authguard } from '././services/auth.gruad';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'posts', component: Posts, canActivate: [authguard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

