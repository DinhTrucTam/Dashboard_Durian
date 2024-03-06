import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AuthService } from '../_login_services/auth.service';
import { SensorService } from '../Services/sensor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // private breakpointObserver = inject(BreakpointObserver);

  // /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Air Temperature',  cols: 1, rows: 1 },
  //         { title: 'Air Humidity',     cols: 1, rows: 1 },
  //         { title: 'Soil Temperature', cols: 1, rows: 1 },
  //         { title: 'Soil Moisture',    cols: 1, rows: 1 },
  //         { title: 'Soil EC',          cols: 1, rows: 1 },
  //         { title: 'Illuminance ',     cols: 1, rows: 1 },
  //       ];
  //     }

  //     return [
  //       { title: 'Air Temperature',    cols: 1, rows: 1 },
  //       { title: 'Air Humidity',       cols: 1, rows: 1 },
  //       { title: 'Soil Temperature',   cols: 1, rows: 1 },
  //       { title: 'Soil Moisture',      cols: 1, rows: 1 },
  //       { title: 'Soil EC',            cols: 1, rows: 1 },
  //       { title: 'Illuminance',        cols: 1, rows: 1 },
  //     ];
  //   })
  // );
  Dashboard_Header = [
    { title: 'Sensors', info: 'Number of current sensors', values: '3', },
    { title: 'Gateway', info: 'Gateway status', values: 'Good' },
    { title: 'Lights', info: 'Light status', values: 'On' },
    { title: 'Canopy', info: 'Canopy status', values: 'On' },
  ];

  // Main_Information = [
  //   { title: 'Air Temperature',  air_temp: '30',    imageUrl: "assets/hot.gif",           lowest: '25', average: '28', highest:'33' },
  //   { title: 'Humidity',         humidity:   '30',  imageUrl: "assets/drop.gif",          lowest: '25', average: '28', highest:'33' },
  //   { title: 'Illuminance',      illum:      '30',  imageUrl: "assets/sun.gif",           lowest: '25', average: '28', highest:'33' },
  //   { title: 'Soil Temperature', soil_temp:  '70',  imageUrl: "assets/soil_temp.png",     lowest: '25', average: '28', highest:'33' },
  //   { title: 'Soil Moisture',    soil_moist: '70',  imageUrl: "assets/hydrated-skin.gif", lowest: '25', average: '28', highest:'33' },
  //   { title: 'Soil EC',          soil_EC:    '200', imageUrl: "assets/electricity.gif",   lowest: '25', average: '28', highest:'33' },
  // ];

  Air_Information = [
    { title: 'Temperature', temp: '30', imageUrl: "assets/centigrade.png" },
    { title: 'Humidity', humid: '30', imageUrl: "assets/humidity.png" },
    { title: 'Illuminance', illum: '30', imageUrl: "assets/contrast.png" },
  ]

  Soil_Information = [
    { title: 'Temperature', temp: '70', imageUrl: "assets/soil_temp.png" },
    { title: 'Moisture', moist: '70', imageUrl: "assets/hydrated-skin.gif" },
    { title: 'EC', EC: '200', imageUrl: "assets/electricity.gif" },
  ]

  constructor(private auth: AuthService, private sensorService: SensorService) { }
  user = { localId: "someid", displayName: "somename" };
  ngOnInit() {
    let temp1, temp2 = 30;
    let tempfinal = 0;
    this.sensorService.receiveTemperatureLightSensorData().subscribe(data => {
      const stringData = data.map(value => String(value));
      const currentTime = new Date();
      this.Air_Information[2].illum = stringData[0]; // Illuminance
      temp1 = parseInt(data(1)); // Air Temperature
      tempfinal = (temp1 + temp2) / 2;
      this.Air_Information[0].temp = String(tempfinal);
    });

    this.sensorService.receiveTemperatureHumidityECData().subscribe(data => {
      const stringData = data.map(value => String(value));
      const currentTime = new Date();
      this.Soil_Information[0].moist = stringData[2]; // Soil Moisture
      this.Soil_Information[1].temp = stringData[0]; // Soil Temperature
      this.Soil_Information[2].EC = stringData[1]; // Soil EC
    });

    this.sensorService.receiveTemperatureHumidityData().subscribe(data => {
      const stringData = data.map(value => String(value));
      const currentTime = new Date();
      this.Air_Information[1].humid = stringData[0]; // Air Humidity
      temp2 = parseInt(data(1)); // Air Temperature
      tempfinal = (temp1 + temp2) / 2;
      this.Air_Information[0].temp = String(tempfinal);
    });
  }
  
}
