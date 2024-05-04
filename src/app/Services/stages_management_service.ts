import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DurianStagesDialogComponent } from '../durian-stages-dialog/durian-stages-dialog.component';
import axios, { AxiosRequestConfig } from 'axios';


@Injectable({
  providedIn: 'root',
})
export class DurianStagesDialogService {
  res: string;
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DurianStagesDialogComponent, {
      width: '600px', // Adjust width as needed
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      this.res = result;
      // You can handle the selected Durian stage here
    });
  }

  getResult(): string {
    return this.res;
  }
  getCurrentStage(): Promise<string> {
    const token = sessionStorage.getItem('token');
    console.log("session token",token)
    if (!token) {
      console.error('Session token not found.');
      return Promise.reject('Session token not found.');
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axios
      .get('http://localhost:3000/auth/getCurrentStage', { headers })
      .then((response) => {
        const stageValue = response.data.stage;
        let stageLabel: string;
        console.log(stageValue)
        switch (stageValue) {
          case 1:
            stageLabel = 'Young Tree';
            break;
          case 2:
            stageLabel = 'First Flowering';
            break;
          case 3:
            stageLabel = 'Fruit Bearing';
            break;
          case 4:
            stageLabel = 'Fruit Ripening';
            break;
          default:
            stageLabel = 'Unknown Stage';
            break;
        }

        return stageLabel;
      })
      .catch((error) => {
        console.error('Error fetching current stage:', error);
        return 'Unknown Stage';
      });
  }
}
