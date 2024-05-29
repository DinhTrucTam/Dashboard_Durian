import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QRImageDialogComponent } from '../qr-image-dialog/qr-image-dialog.component';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { DurianStagesDialogService } from '../Services/stages_management_service';
import { SensorDataService } from '../Services/data.service';
import { SensorService } from '../Services/sensor.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})

export class SensorsComponent {
  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    @Inject(DurianStagesDialogService) private stages: DurianStagesDialogService,
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
  
  exportQRCode(object: string): void {
    let imageUrl: string;
    switch (object) {
      case "LSN50v2-S31B":
        // todo
        imageUrl = "assets/ls50v2s31b.png";
        break;
      case "LSN50v2-8":
        //todo
        imageUrl = "assets/ls50v28.png";
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