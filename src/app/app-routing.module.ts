import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupFormComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppRoutingModule { }
