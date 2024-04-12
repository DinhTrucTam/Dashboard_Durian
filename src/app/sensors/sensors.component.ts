import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QRImageDialogComponent } from '../qr-image-dialog/qr-image-dialog.component';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { DurianStagesDialogService } from '../Services/stages_management_service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})

export class SensorsComponent {
  constructor(public dialog: MatDialog, private toastr: ToastrService, @Inject(DurianStagesDialogService) private stages: DurianStagesDialogService) { }
  lsn50v2S31BSensors = [
    { title: 'Air Temperature', temperature_first: '35', imageUrl: "assets/centigrade.png" },
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

  protected checkStatistics(): void {
    const moistValue: number = parseFloat(this.lse018Sensors[1].moisture_second);
    const tempValue: number = (parseFloat(this.lsn50v2S31BSensors[0].temperature_first) + parseFloat(this.lsn50v28Sensors[0].temperature_third)) / 2;
    // Giai đoạn cây con và cây ra hoa
    if (this.stages.getResult() == "Young Tree" || this.stages.getResult() == "First Flowering") {
      if (moistValue >= 0 && moistValue < 30) {
        this.toastr.error("Soil Moisture is currently too low. Trees need watering", "Danger", this.toastConfig());
      }
      else if (moistValue >= 30 && moistValue < 65) {
        this.toastr.warning("Trees need watering in order to reach at least 50%", "Warning", this.toastConfig());
      }
      else if (moistValue >= 65 && moistValue <= 80) {
        if (tempValue >= 24 && tempValue <= 30) {
          this.toastr.success("Soil Moisture and Air Temperature is perfect", "Optimal", this.toastConfig());
        }
        else {
          this.toastr.warning("Air Temperature is not optimal. But Soil Moisture is good.", "Nearly Optimal", this.toastConfig());
        }
      }
      else if (moistValue > 80 && moistValue <= 100) {
        this.toastr.error("Soil is too wet", "Danger", this.toastConfig());
      }
    }

    // Giai đoạn cây ra quả
    if (this.stages.getResult() == "Fruit Bearing") {
      if (moistValue >= 0 && moistValue < 30) {
        this.toastr.error("Soil Moisture is currently too low. Trees need watering", "Danger", this.toastConfig());
      }
      else if (moistValue >= 30 && moistValue < 70) {
        this.toastr.warning("Trees need watering in order to reach at least 70%", "Warning", this.toastConfig());
      }
      else if (moistValue >= 70 && moistValue <= 90) {
        if (tempValue >= 24 && tempValue <= 30) {
          this.toastr.success("Soil Moisture and Air Temperature is perfect for Fruit Bearing", "Optimal", this.toastConfig());
        }
        else {
          this.toastr.warning("Air Temperature is not optimal. But Soil Moisture is good.", "Nearly Optimal", this.toastConfig());
        }
      }
      else if (moistValue > 90 && moistValue <= 100) {
        this.toastr.error("Soil is too wet for Fruit Bearing", "Danger", this.toastConfig());
      }
    }

    // Giai đoạn cây có quả chín
    if (this.stages.getResult() == "Fruit Ripening") {
      if (moistValue >= 0 && moistValue < 20) {
        this.toastr.error("Soil Moisture is currently too low. Trees need watering", "Danger", this.toastConfig());
      }
      else if (moistValue >= 20 && moistValue < 50) {
        this.toastr.warning("Trees need watering in order to reach at least 50%", "Warning", this.toastConfig());
      }
      else if (moistValue >= 50 && moistValue <= 60) {
        if (tempValue >= 20 && tempValue <= 22) {
          this.toastr.success("Soil Moisture and Air Temperature is perfect for Fruit Ripening", "Optimal", this.toastConfig());
        }
        else {
          this.toastr.warning("Air Temperature is not optimal. But Soil Moisture is good.", "Nearly Optimal", this.toastConfig());
        }
      }
      else if (moistValue > 60 && moistValue <= 100) {
        this.toastr.error("Soil is too wet for Fruit Ripening", "Danger", this.toastConfig());
      }
    }
  }

  private toastConfig(): Partial<IndividualConfig> {
    return {
      timeOut: 0 // Set timeOut to 0 for indefinite display
    };
  }
}