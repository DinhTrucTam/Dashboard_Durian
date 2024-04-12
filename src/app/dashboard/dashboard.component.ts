import { Component, Inject, OnInit } from '@angular/core';
import { DurianStagesDialogService } from '../Services/stages_management_service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Dashboard_Header = [
    { title: 'Sensors', info: 'Number of current sensors', values: '3', },
    { title: 'Gateway', info: 'Gateway status', values: 'Good' },
    { title: 'Lights', info: 'Light status', values: 'On' },
    { title: 'Stage', info: 'Current stage', values: this.stages.getResult() },
  ];

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

  constructor(
    @Inject(DurianStagesDialogService) private stages: DurianStagesDialogService) {
  }

  user = { localId: "someid", displayName: "somename" };

  ngOnInit(): void {
  }
}