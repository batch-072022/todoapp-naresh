import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//http://localhost:4200/register
//http://localhost:4200/login

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component: RegisterComponent },
  {path:'login', component: LoginComponent},
  {path:'listuser', component:ListUsersComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
