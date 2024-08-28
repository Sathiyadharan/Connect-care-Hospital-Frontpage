import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';
 

  constructor(private authService: AuthService, private router: Router) {}
  onLogin() {
    console.log('onLogin ', this.email, this.password);
    this.authService.signIn(this.email, this.password).subscribe(
      (x) => {
        console.log(' success data result ', x);

        localStorage.setItem('token', x.access_token)
      
      this.router.navigateByUrl('home')

      },
      (err) => {
        console.error('error ', err);
      }
    );
  }


}
