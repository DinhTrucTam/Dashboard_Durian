import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import axios from 'axios';

@Component({
  selector: 'app-durian-stages-dialog',
  templateUrl: './durian-stages-dialog.component.html',
  styleUrls: ['./durian-stages-dialog.component.css'],
})
export class DurianStagesDialogComponent implements OnInit {
  public selectedStage: string; // Property to store the selected Durian stage

  stages = [
    // Define your Durian stages here
    { value: 'Young Tree', label: 'Stage 1: Young Tree' },
    { value: 'First Flowering', label: 'Stage 2: First Flowering' },
    { value: 'Fruit Bearing', label: 'Stage 3: Fruit Bearing' },
    { value: 'Fruit Ripening', label: 'Stage 4: Fruit Ripening' },
  ];

  constructor(public dialogRef: MatDialogRef<DurianStagesDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  confirmSelection(): void {
    if (this.selectedStage) {
      this.postStageToBackend(); // Call the method to post the stage to the backend
    } else {
      // Handle case where no stage is selected
      console.error('No Durian stage selected.');
    }
  }

  postStageToBackend() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('Token not found in session storage');
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };


    // Map the stage value to a numeric value
    let stageValue: number;

    switch (this.selectedStage) {
      case 'Young Tree':
        stageValue = 1;
        break;
      case 'First Flowering':
        stageValue = 2;
        break;
      case 'Fruit Bearing':
        stageValue = 3;
        break;
      case 'Fruit Ripening':
        stageValue = 4;
        break;
      default:
        console.error('Invalid stage selected');
        return; // Exit the function if the stage is invalid
    }

    // Prepare the data to send to the backend
    const postData = {
      stage: stageValue,
    };

    // Make the POST request
    axios
      .post('http://localhost:3000/auth/stage', postData, { headers })
      .then((response) => {
        console.log('Post request successful:', response.data);
        // Handle the response here
        this.dialogRef.close(this.selectedStage); // Close the dialog on success
      })
      .catch((error) => {
        console.error('Error making post request:', error);
        // Handle error response here
      });
  }
}
