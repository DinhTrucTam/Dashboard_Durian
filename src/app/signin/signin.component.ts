import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_login_services/auth.service';
import { DurianStagesDialogService } from '../Services/stages_management_service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private dialogService: DurianStagesDialogService) { }
  
  username: string;
  password: string;
  verified: boolean = false;

  admin_username: string = 'admin';
  admin_password: string = 'admin';

  user1_username: string = 'user1';
  user1_password: string = 'user1';

  person_type: string;

  ngOnInit() {
  }

  login(): void {
    if (this.username == this.admin_username && this.password == this.admin_password) {
      this.person_type = 'admin';
      this.verified = true;
      this.authService.setVerified(this.verified, this.person_type);
      this.router.navigate(["sensors"]);
    }
    else if (this.username == this.user1_username && this.password == this.user1_password) {
      this.person_type = 'user';
      this.verified = true;
      this.authService.setVerified(this.verified, this.person_type);
      this.dialogService.openDialog();
      this.router.navigate(["sensors"]);
    }
  }

}