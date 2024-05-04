import { Component, Inject, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  Dashboard_Header = [
    { title: 'Sensors', info: 'Number of current sensors', values: '3' },
    { title: 'Gateway', info: 'Gateway status', values: 'Good' },
    { title: 'Lights', info: 'Light status', values: 'On' },
    { title: 'Stage', info: 'Current stage', values: '' }, // Initialize as empty string
  ];

  Air_Information = [
    { title: 'Temperature', temp: '30', imageUrl: 'assets/centigrade.png' },
    { title: 'Humidity', humid: '30', imageUrl: 'assets/humidity.png' },
    { title: 'Illuminance', illum: '30', imageUrl: 'assets/contrast.png' },
  ];

  Soil_Information = [
    { title: 'Temperature', temp: '70', imageUrl: 'assets/soil_temp.png' },
    { title: 'Moisture', moist: '70', imageUrl: 'assets/hydrated-skin.gif' },
    { title: 'EC', EC: '200', imageUrl: 'assets/electricity.gif' },
  ];

  constructor() {}

  ngOnInit(): void {
    // Call a function to fetch the current stage
    this.fetchCurrentStage();
  }

  fetchCurrentStage() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('Session token not found.');
      return;
    }

    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    axios
      .get('http://localhost:3000/auth/getCurrentStage', config)
      .then((response) => {
        const currentStage = response.data.stage;

        // Update the Dashboard_Header array with the current stage value
        this.Dashboard_Header[3].values = this.mapStageLabel(currentStage);
      })
      .catch((error) => {
        console.error('Error fetching current stage:', error);
        // Handle error here
      });
  }

  // Helper function to map stage value to label
  mapStageLabel(stageValue: number): string {
    switch (stageValue) {
      case 1:
        return 'Young Tree';
      case 2:
        return 'First Flowering';
      case 3:
        return 'Fruit Bearing';
      case 4:
        return 'Fruit Ripening';
      default:
        return 'Unknown Stage';
    }
  }
}
