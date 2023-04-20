import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { User } from 'src/app/providers/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: User;

  constructor(public auth: AuthService) {
  }
  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.user = user)
  }

  login(): void {
      this.auth.loginWithGoogle();
  }

}
