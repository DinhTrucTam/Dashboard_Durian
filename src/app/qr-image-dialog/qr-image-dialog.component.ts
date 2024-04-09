import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-image-dialog',
  templateUrl: './qr-image-dialog.component.html',
  styleUrls: ['./qr-image-dialog.component.css']
})
export class QRImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  downloadImage(): void {
    const link = document.createElement('a');
    link.href = this.data.Image;
    link.download = 'image.png';
    link.click();
  }
}
