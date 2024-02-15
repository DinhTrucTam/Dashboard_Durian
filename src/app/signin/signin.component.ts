import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_login_services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  username: string;
  password: string;
  verified: boolean = false;

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.verified = true;
      this.authService.setVerified(this.verified);
      this.router.navigate(["dashboard"]);
    }
    else {
      this.verified = false;
      this.authService.setVerified(this.verified);
      alert("Invalid credentials");
    }
  }
}