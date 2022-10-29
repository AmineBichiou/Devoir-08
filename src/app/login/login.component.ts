import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();
erreur: any;
  constructor(private authService : AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  onLoggedin()
{
  let isValidUser: Boolean = this.authService.SignIn(this.user);
  if (isValidUser)
  this.router.navigate(['/']);
  else
  //alert('Login ou mot de passe incorrecte!');
  this.erreur=1;
}

}
