import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QRImageDialogComponent } from '../qr-image-dialog/qr-image-dialog.component';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent {
  constructor(public dialog: MatDialog) { }
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

  ngOnInit(): void { }

  exportQRCode(object: string): void {
    let imageUrl: string;
    switch (object) {
      case "LSN50v2-S31B":
        // todo
        imageUrl = "assets/lsn50v2s31b.png";
        break;
      case "LSN50v2-8":
        //todo
        imageUrl = "assets/lsn50v28.png";
        break;
      case "LSE01-8":
        //todo
        imageUrl = "assets/lse018.png";
        break;
      default:
        return;
    }
    this.openImageDialog(imageUrl);
  }

  openImageDialog(imageUrl: string): void {
    this.dialog.open(QRImageDialogComponent, {
      width: '600px',
      data: { Image: imageUrl },
    });
  }
}
