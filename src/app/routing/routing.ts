import {Routes} from '@angular/router';
import {SignupComponent} from '../signup/signup.component';
import {ProfileComponent} from '../profile/profile.component';

const app_route: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: '/signup', pathMatch: 'full'},
];
export const routing = app_route;

