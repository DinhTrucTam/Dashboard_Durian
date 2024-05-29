import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartDataService } from '../Services/chart-data.service';
import { Subscription } from 'rxjs';
import axios from 'axios';


@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent implements OnInit {
  private dataSubscription: Subscription;
  lineChart1: Chart;
  lineChart2: Chart;
  lineChart3: Chart;
  lineChart4: Chart;
  lineChart5: Chart;
  lineChart6: Chart;

  downloadCSV() {
    axios.get('http://localhost:3000/sensor/getCSV', {
      responseType: 'blob', // Important to ensure the response is a Blob
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'text/csv' }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'data_history.xlsx'); // or any other extension
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error) => {
      console.error('There was an error downloading the CSV file!', error);
    });
  }

  constructor(private chartDataService: ChartDataService) {}

  ngOnInit() {
    this.lineChart1 = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Temperature get from Sensors',
      },
      xAxis: {
        title: {
          text: 'time',
        },
      },
      yAxis: {
        title: {
          text: 'values',
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Temperature values',
          data: [1, 2, 3, 4, 5],
        } as any,
      ],
    });

    this.lineChart2 = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Humidity get from Sensors',
      },
      xAxis: {
        title: {
          text: 'time',
        },
      },
      yAxis: {
        title: {
          text: 'values',
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Humidity values',
          data: [0, 2, 4, 6, 8],
        } as any,
      ],
    });

    this.lineChart3 = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Illuminance get from Sensors',
      },
      xAxis: {
        title: {
          text: 'time',
        },
      },
      yAxis: {
        title: {
          text: 'values',
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Illuminance values',
          data: [5, 6, 8, 9, 10],
        } as any,
      ],
    });

    this.lineChart4 = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Soil Temperature get from Sensors',
      },
      xAxis: {
        title: {
          text: 'time',
        },
      },
      yAxis: {
        title: {
          text: 'values',
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Soil Temperature values',
          data: [10, 2, 3, 6, 9],
        } as any,
      ],
    });

    this.lineChart5 = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Soil Moisture get from Sensors',
      },
      xAxis: {
        title: {
          text: 'time',
        },
      },
      yAxis: {
        title: {
          text: 'values',
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Soil Moisture values',
          data: [0, 10, 5, 30, 9],
        } as any,
      ],
    });

    this.lineChart6 = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Soil Electrical Conductivity get from Sensors',
      },
      xAxis: {
        title: {
          text: 'time',
        },
      },
      yAxis: {
        title: {
          text: 'values',
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Soil Electrical Conductivity values',
          data: [10, 2, 3, 6, 9],
        } as any,
      ],
    });
    this.dataSubscription = this.chartDataService
      .getData()
      .subscribe((data) => {
        // Update charts with the latest received data
        this.updateCharts(data);
      });
  }

  ngOnDestroy() {
    // Unsubscribe from data updates to prevent memory leaks
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  private updateCharts(data: any) {
    console.log(data)
    // Update charts with the latest data
    this.lineChart1.ref.series[0].setData(data.temperatureLatestData);
    this.lineChart2.ref.series[0].setData(data.humidityData);
    this.lineChart3.ref.series[0].setData(data.illuminanceLatestData);
    this.lineChart4.ref.series[0].setData(data.SoilTemperatureData);
    this.lineChart5.ref.series[0].setData(data.SoilHumidityData);
    this.lineChart6.ref.series[0].setData(data.electricalConductivityData);
  }
}