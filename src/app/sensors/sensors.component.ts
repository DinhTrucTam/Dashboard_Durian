import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent {
  lsn50v2S31BSensors = [
    { title: 'Air Temperature', temperature_first: '30',                   imageUrl: "assets/temperature.png"},
    { title: 'Air Humidity',    humidty_first:     '70',                   imageUrl: "assets/humidty.png" },
    { title: 'Alarm',           alarm_first:       'DANGER',               imageUrl: "assets/alarm.png" },
    { title: 'Battery',         battery_first:     '75',                   imageUrl: "assets/battery.png" },
    {
      title: 'Overall Status', status: {
        connection: 'Connected',
        battery: '75%',
        lastUpdated: '2022-01-15 12:30 PM'
      }, 
      imageUrl: "assets/status.png" },
  ];

  lse018Sensors = [
    { title: 'Soil Temperature', temperature_second: '30',     imageUrl: "assets/soil_temp.png" },
    { title: 'Soil Moisture',    moisture_second:    '70',     imageUrl: "assets/moisture.png" },
    { title: 'Soil EC',          EC_second:          '200',    imageUrl: "assets/EC.png" },
    { title: 'Battery',          battery_second:     '75',     imageUrl: "assets/battery.png" },
    {
      title: 'Overall Status', status: {
        connection: 'Connected',
        battery: '75%',
        lastUpdated: '2022-01-15 12:30 PM'
      }, 
      imageUrl: "assets/status.png" },
  ];

  lsn50v28Sensors = [
    { title: 'Air Temperature', temperature_third: '30',  imageUrl: "assets/temperature.png"},
    { title: 'Illuminance',     illum_third:       '500', imageUrl: "assets/illumination.png" },
    { title: 'Battery',         battery_third:     '75',  imageUrl: "assets/battery.png" },
    {
      title: 'Overall Status', status: {
        connection: 'Connected',
        battery: '75%',
        lastUpdated: '2022-01-15 12:30 PM'
      }, 
      imageUrl: "assets/status.png" },
  ];
}
