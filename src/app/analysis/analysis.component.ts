import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chart } from 'highcharts';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  lineChart1 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Temperature get from Sensors'
    },
    xAxis: {
      title: {
        text: "time"
      }
    },
    yAxis: {
      title: {
        text: "values"
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Temperature values',
        data: [1, 2, 3, 4, 5]
      } as any
    ]
  })

  lineChart2 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Humidity get from Sensors'
    },
    xAxis: {
      title: {
        text: "time"
      }
    },
    yAxis: {
      title: {
        text: "values"
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Humidity values',
        data: [0, 2, 4, 6, 8]
      } as any
    ]
  })

  lineChart3 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Illuminance get from Sensors'
    },
    xAxis: {
      title: {
        text: "time"
      }
    },
    yAxis: {
      title: {
        text: "values"
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Illuminance values',
        data: [5, 6, 8, 9, 10]
      } as any
    ]
  })

  lineChart4 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Soil Temperature get from Sensors'
    },
    xAxis: {
      title: {
        text: "time"
      }
    },
    yAxis: {
      title: {
        text: "values"
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Soil Temperature values',
        data: [10, 2, 3, 6, 9]
      } as any
    ]
  })

  lineChart5 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Soil Moisture get from Sensors'
    },
    xAxis: {
      title: {
        text: "time"
      }
    },
    yAxis: {
      title: {
        text: "values"
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Soil Moisture values',
        data: [0, 10, 5, 30, 9]
      } as any
    ]
  })

  lineChart6 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Soil Electrical Conductivity get from Sensors'
    },
    xAxis: {
      title: {
        text: "time"
      }
    },
    yAxis: {
      title: {
        text: "values"
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Soil Electrical Conductivity values',
        data: [10, 2, 3, 6, 9]
      } as any
    ]
  })

  ngOnInit() {
    setInterval(() => {
      const newDataPoint = Math.floor(Math.random() * 10); // Generate random data point
      const series1 = this.lineChart1.ref.series[0]; // Get the series
      const shift1 = series1.data.length >= 10; // Shift if more than 10 points
      series1.addPoint(newDataPoint, true, shift1); // Add the new point

      const series2 = this.lineChart2.ref.series[0]; // Get the series
      const shift2 = series2.data.length >= 10; // Shift if more than 10 points
      series2.addPoint(newDataPoint, true, shift2); // Add the new point

      const series3 = this.lineChart3.ref.series[0]; // Get the series
      const shift3 = series3.data.length >= 10; // Shift if more than 10 points
      series3.addPoint(newDataPoint, true, shift3); // Add the new point

      const series4 = this.lineChart4.ref.series[0]; // Get the series
      const shift4 = series4.data.length >= 10; // Shift if more than 10 points
      series4.addPoint(newDataPoint, true, shift4); // Add the new point

      const series5 = this.lineChart5.ref.series[0]; // Get the series
      const shift5 = series5.data.length >= 10; // Shift if more than 10 points
      series5.addPoint(newDataPoint, true, shift5); // Add the new point

      const series6 = this.lineChart6.ref.series[0]; // Get the series
      const shift6 = series6.data.length >= 10; // Shift if more than 10 points
      series6.addPoint(newDataPoint, true, shift6); // Add the new point
    }, 1000); // Add a point every 1 second
  }
}