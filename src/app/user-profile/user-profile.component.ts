import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userAvatar: string | ArrayBuffer | null = null;
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  currentPhase: string = '';

  constructor() {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.userAvatar = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  updateUserProfile() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('Token not found in session storage');
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log('Token from sessionStorage:', token); // Log the token
    console.log('Request headers:', headers); // Log the request headers

    const profileData = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      currentPhase: this.currentPhase,
    };

    console.log('Profile data:', profileData); // Log profile data before sending the request

    axios
      .put('http://localhost:3000/auth/update-profile', profileData, {
        headers,
      })
      .then((response) => {
        console.log('Response from server:', response.data); // Log the response from the server
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        // Handle error response from the backend, such as displaying an error message
      });
  }
}
