import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_login_services/auth.service';
import { DurianStagesDialogService } from '../Services/stages_management_service';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import axios from 'axios';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  username: string;
  password: string;
  verified: boolean = false;
  person_type: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private dialogService: DurianStagesDialogService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  login(): void {
    axios
      .post('http://localhost:3000/auth/signIn', {
        email: this.username,
        password: this.password,
      })
      .then((response) => {
        if (response.data) {
          this.person_type = response.data.metadata.role; // Assign role from response
          this.verified = true;
          this.authService.setVerified(this.verified, this.person_type);
          sessionStorage.setItem('token',response.data.metadata.token);
          if (this.person_type == 'user') {
            this.dialogService.openDialog();
          }
          this.toastr.success(
            `Welcome back, ${response.data.metadata.name}!!!`,
            'Success',
            this.toastConfig()
          );
          this.router.navigate(['sensors']);
        } else {
          this.toastr.error(
            'Wrong information. Try again.',
            'Failed',
            this.toastConfig()
          );
        }
      })
      .catch((error) => {
        this.toastr.error(
          'An error occurred. Try again.',
          'Failed',
          this.toastConfig()
        );
      });
  }

  private toastConfig(): Partial<IndividualConfig> {
    return {
      timeOut: 5000, // Set timeOut to 0 for indefinite display
    };
  }
}
