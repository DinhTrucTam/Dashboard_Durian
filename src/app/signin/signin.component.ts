import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_login_services/auth.service';
import { SharedService } from '../shared.service'; 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private sharedService: SharedService 
  ) {}

  username: string;
  password: string;
  verified: boolean = false;

  ngOnInit() {}

  login(): void {
    if (this.username == 'admin@gmail.com' && this.password == 'admin') {
      this.verified = true;
      this.authService.setVerified(this.verified);
      this.sharedService.changeUsername(this.username);
      this.router.navigate(['sensors']);
    } else if (this.username == '111' && this.password == '111'){
            this.verified = true;
            this.authService.setVerified(this.verified);
            this.sharedService.changeUsername(this.username);
            this.router.navigate(['sensors']);
    }
     else {
      this.verified = false;
      this.authService.setVerified(this.verified);
      alert('Invalid credentials');
    }
  }
}
