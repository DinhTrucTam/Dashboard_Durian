import { Component, Inject, OnInit } from '@angular/core';
import axios from 'axios';
import { SensorService } from '../Services/sensor.service';
import { DashboardDataService } from '../Services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private sensorService: SensorService, @Inject(DashboardDataService) private dashboardDataService: DashboardDataService) { }


  ngOnInit() {
    let temp1, temp2 = 30;
    let tempfinal = 0;
    this.sensorService.receiveTemperatureLightSensorData().subscribe(data => {
      const stringData = data.map(value => String(value));
      this.Air_Information[2].illum = String(stringData[0]); // Illuminance
      temp1 = parseInt(stringData[1]); // Air Temperature
      tempfinal = (temp1 + temp2) / 2;
      this.Air_Information[0].temp = String(stringData[1]);
    });

    this.sensorService.receiveTemperatureHumidityECData().subscribe(data => {
      const stringData = data.map(value => String(value));
      const currentTime = new Date();
      console.log("stringdata",stringData)
      this.Soil_Information[1].moist = String(stringData[2]); // Soil Moisture
      this.Soil_Information[0].temp = String(stringData[0]); // Soil Temperature
      this.Soil_Information[2].EC = String(stringData[1]); // Soil EC
    });

    this.sensorService.receiveTemperatureHumidityData().subscribe(data => {
      const stringData = data.map(value => String(value));
      const currentTime = new Date();
      this.Air_Information[1].humid = stringData[0]; // Air Humidity
      temp2 = parseInt(stringData[1]); // Air Temperature
      tempfinal = (temp1 + temp2) / 2;
      this.Air_Information[0].temp = String(stringData[1]);
    });
    this.fetchCurrentStage();
  }
  get Dashboard_Header() {
    return this.dashboardDataService.Dashboard_Header;
  }
  get Air_Information() {
    return this.dashboardDataService.Air_Information;
  }
  get Soil_Information() {
    return this.dashboardDataService.Soil_Information;
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
