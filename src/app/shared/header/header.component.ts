import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isAuthenticated = this.authService.isAuthenticated();
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
