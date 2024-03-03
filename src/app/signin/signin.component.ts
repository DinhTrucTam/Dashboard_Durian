import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_login_services/auth.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  public chatService: SettingsComponent;

  username: string;
  password: string;
  verified: boolean = false;

  ngOnInit() {
  }

  classification(dismiss: any): void{
    this.chatService.currentUser = this.chatService.userList.find(user => user.phone === this.username);
    this.chatService.userList = this.chatService.userList.filter((user) => user.phone !== this.username);

    if (this.chatService.currentUser) {
      this.chatService.showScreen = true;
      console.log(this.chatService.currentUser);
      dismiss();
    }
  }

  login(): void {
    if (this.username == 'admin@gmail.com' && this.password == 'admin') {
      this.verified = true;
      this.authService.setVerified(this.verified);
      this.classification(false);
      this.router.navigate(["sensors"]);
    }
    else {
      this.verified = false;
      this.authService.setVerified(this.verified);
      alert("Invalid credentials");
    }
  }
}