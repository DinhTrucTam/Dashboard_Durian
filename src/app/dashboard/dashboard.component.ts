import { Component, Inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AuthService } from '../_login_services/auth.service';
import { SensorService } from '../Services/sensor.service';
import { DashboardDataService } from '../Services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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

  constructor(
    private auth: AuthService,
    private sensorService: SensorService,
    @Inject(DashboardDataService)
    private dashboardDataService: DashboardDataService
  ) {}
  user = { localId: 'someid', displayName: 'somename' };
  ngOnInit() {
    let temp1 = 0,
      temp2 = 0;
    let tempfinal = 0;
    this.sensorService.receiveTemperatureLightSensorData().subscribe((data) => {
      const stringData = data.map((value) => String(value));
      this.Air_Information[2].illum = stringData[0]; // Illuminance
      console.log('templightdata', stringData[1]);
      temp1 = parseFloat(stringData[1]); // Air Temperature
      if (temp2 == 0) {
        tempfinal = temp1;
      } else {
        tempfinal = (temp1 + temp2) / 2;
      }
      this.Air_Information[0].temp = String(tempfinal);
    });

    this.sensorService.receiveTemperatureHumidityECData().subscribe((data) => {
      const stringData = data.map((value) => String(value));
      const currentTime = new Date();
      this.Soil_Information[1].moist = stringData[2]; // Soil Moisture
      this.Soil_Information[0].temp = stringData[0]; // Soil Temperature
      this.Soil_Information[2].EC = stringData[1]; // Soil EC
    });

    this.sensorService.receiveTemperatureHumidityData().subscribe((data) => {
      const stringData = data.map((value) => String(value));
      const currentTime = new Date();
      this.Air_Information[1].humid = stringData[0]; // Air Humidity
      console.log('temphumiddata', stringData[1]);
      temp2 = parseFloat(stringData[1]); // Air Temperature
      if (temp1 == 0) {
        tempfinal = temp2;
      } else {
        tempfinal = (temp1 + temp2) / 2;
      }
      this.Air_Information[0].temp = String(tempfinal);
    });
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
}
