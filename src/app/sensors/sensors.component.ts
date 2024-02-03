import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent {
  lsn50v2S31BSensors = [
    { title: 'Air Temperature', temperature_first: '30', imageUrl: "assets/centigrade.png" },
    { title: 'Air Humidity', humidty_first: '70', imageUrl: "assets/humidity.png" },
    { title: 'Warning', alarm_first: 'DANGER', imageUrl: "assets/temp_warning.png" },
    { title: 'Battery Capacity', battery_first: '75', imageUrl: "assets/smartphone-charger.png" },
    {
      title: 'Overall Status', status: {
        connection: 'Connected',
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
        connection: 'Connected',
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
        connection: 'Connected',
        battery: '75%',
        lastUpdated: '2022-01-15 12:30 PM'
      },
      imageUrl: "assets/clipboard.png"
    },
  ];
}
