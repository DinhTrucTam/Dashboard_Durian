import { Component, OnInit } from '@angular/core';
import { SensorService } from '../Services/sensor.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  lsn50v2S31BSensors = [
    { title: 'Air Temperature', temperature_first: '30', imageUrl: "assets/centigrade.png" },
    { title: 'Air Humidity', humidty_first: '70', imageUrl: "assets/humidity.png" },
    { title: 'Warning', alarm_first: 'DANGER', imageUrl: "assets/temp_warning.png" },
    { title: 'Battery Capacity', battery_first: '75', imageUrl: "assets/smartphone-charger.png" },
    {
      title: 'Overall Status', status: {
        connection: 'Not Connected',
        battery: '75%',
        lastUpdated: '2022-01-15 12:30 PM'
      },
      imageUrl: "assets/clipboard.png"
    },
  ];

  lse018Sensors = [
    { title: 'Soil Temperature', temperature_second: '30', imageUrl: "assets/soil_temp.png" },
    { title: 'Soil Moisture', moisture_second: '70', imageUrl: "assets/moisturizing.png" },
    { title: 'Soil EC', EC_second: '200', imageUrl: "assets/eco-energy.png" },
    { title: 'Battery Capacity', battery_second: '75', imageUrl: "assets/smartphone-charger.png" },
    {
      title: 'Overall Status', status: {
        connection: 'Not Connected',
        battery: '75%',
        lastUpdated: '2022-01-15 12:30 PM'
      },
      imageUrl: "assets/clipboard.png"
    },
  ];

  lsn50v28Sensors = [
    { title: 'Air Temperature', temperature_third: '30', imageUrl: "assets/centigrade.png" },
    { title: 'Illuminance', illum_third: '500', imageUrl: "assets/contrast.png" },
    { title: 'Battery Capacity', battery_third: '75', imageUrl: "assets/smartphone-charger.png" },
    {
      title: 'Overall Status', status: {
        connection: 'Not Connected',
        battery: '75%',
        lastUpdated: '2022-01-15 12:30 PM'
      },
      imageUrl: "assets/clipboard.png"
    },
  ];

  constructor(private sensorService: SensorService) { }

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
}
