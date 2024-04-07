import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userAvatar: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.userAvatar = e.target.result;
        // You may send this image data to your backend for storage
        // For example, you can use Angular HttpClient to send a POST request
        // to your backend server with the file data.
      };
      reader.readAsDataURL(file);
    }
  }
}