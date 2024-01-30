import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
    { title: 'Sensors', info: 'Number of current sensors', values:'3', },
    { title: 'Gateway', info: 'Gateway status',            values: 'Good' },
    { title: 'Lights',  info: 'Light status',              values: 'On' },
    { title: 'Canopy',  info: 'Canopy status',             values: 'On' },
  ];

  Main_Information = [
    { title: 'Air Temperature',  air_temp: '30',    imageUrl: "assets/hot.gif",           lowest: '25', average: '28', highest:'33' },
    { title: 'Humidity',         humidity:   '30',  imageUrl: "assets/drop.gif",          lowest: '25', average: '28', highest:'33' },
    { title: 'Illuminance',      illum:      '30',  imageUrl: "assets/sun.gif",           lowest: '25', average: '28', highest:'33' },
    { title: 'Soil Temperature', soil_temp:  '70',  imageUrl: "assets/soil_temp.png",     lowest: '25', average: '28', highest:'33' },
    { title: 'Soil Moisture',    soil_moist: '70',  imageUrl: "assets/hydrated-skin.gif", lowest: '25', average: '28', highest:'33' },
    { title: 'Soil EC',          soil_EC:    '200', imageUrl: "assets/electricity.gif",   lowest: '25', average: '28', highest:'33' },
  ];

  Air_Information = [
    { title: 'Temperature', temp:  '30', imageUrl: "assets/hot.gif"},
    { title: 'Humidity', humid: '30', imageUrl: "assets/drop.gif"},
    { title: 'Illuminance', illum: '30', imageUrl: "assets/sun.gif"},
  ]

  Soil_Information = [
    { title: 'Temperature', temp: '70',  imageUrl: "assets/soil_temp.png"},
    { title: 'Moisture',    moist: '70', imageUrl: "assets/hydrated-skin.gif"},
    { title: 'EC',          EC: '200',   imageUrl: "assets/electricity.gif"},
  ]
}
