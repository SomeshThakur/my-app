import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, KEY } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;
  isError: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (res: any) => {
        localStorage.setItem(KEY, res.token);
        this.router.navigate(['courses']);
      },
      (err) => {
        this.isError = true;
      }
    );
  }
}
