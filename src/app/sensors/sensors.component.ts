import { Component, OnInit, Inject } from '@angular/core';
import { SensorService } from '../Services/sensor.service'; // Import the SensorService
import { SensorDataService } from '../Services/data.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  constructor(
    private sensorService: SensorService,
    @Inject(SensorDataService) private sensorDataService: SensorDataService
  ) { }

  ngOnInit() {
    this.sensorService.receiveTemperatureLightSensorData().subscribe(data => {
      const stringData = data.map(value => String(value));
      const currentTime = new Date();
      this.lsn50v28Sensors[0].temperature_third = stringData[1]; // Air Temperature
      this.lsn50v28Sensors[1].illum_third = stringData[0]; // Illuminance
      this.lsn50v28Sensors[2].battery_third = stringData[2] + 'V'; // Battery
      this.lsn50v28Sensors[3].status.battery = stringData[2] + 'V'; // Battery
      this.lsn50v28Sensors[3].status.lastUpdated = currentTime.toLocaleString(); // Last Updated
      console.log('Temperature Light Sensor Data:', data);
    });

    this.sensorService.receiveTemperatureHumidityECData().subscribe(data => {
      const stringData = data.map(value => String(value));
      const currentTime = new Date();
      this.lse018Sensors[0].temperature_second = stringData[0]; // Soil Temperature
      this.lse018Sensors[1].moisture_second = stringData[2]; // Soil Moisture
      this.lse018Sensors[2].EC_second = stringData[1]; // Soil EC
      this.lse018Sensors[3].battery_second = stringData[3] + 'V'; // Battery
      this.lse018Sensors[4].status.battery = stringData[3] + 'V'; // Battery
      this.lse018Sensors[4].status.lastUpdated = currentTime.toLocaleString(); // Last Updated
      console.log('Temperature Humidity EC Sensor Data:', data);
    });

    this.sensorService.receiveTemperatureHumidityData().subscribe(data => {
      const stringData = data.map(value => String(value));
      const currentTime = new Date();
      this.lsn50v2S31BSensors[1].humidty_first = stringData[0]; // Air Humidity
      this.lsn50v2S31BSensors[0].temperature_first = stringData[1]; // Air Temperature
      this.lsn50v2S31BSensors[2].alarm_first = stringData[2]; // Alarm
      this.lsn50v2S31BSensors[3].battery_first = stringData[3] + 'V'; // Battery
      this.lsn50v2S31BSensors[4].status.battery = stringData[3] + 'V'; // Battery
      this.lsn50v2S31BSensors[4].status.lastUpdated = currentTime.toLocaleString(); // Last Updated
      console.log('Temperature Humidity Sensor Data:', data);
    });

    this.sensorService.onDisconnect().subscribe(() => {
      console.log('Disconnected from server');
    });
  }

  get lsn50v2S31BSensors() {
    return this.sensorDataService.lsn50v2S31BSensors;
  }

  get lse018Sensors() {
    return this.sensorDataService.lse018Sensors;
  }

  get lsn50v28Sensors() {
    return this.sensorDataService.lsn50v28Sensors;
  }
}
