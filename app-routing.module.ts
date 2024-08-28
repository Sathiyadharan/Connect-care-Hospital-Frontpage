import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'sign-in',
    component:SignInComponent,
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'book',
    component:BookComponent
  } ,
   {
    path:'welcome',
    component:WelcomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
