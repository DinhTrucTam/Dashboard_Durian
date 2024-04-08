import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  // dps = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  // chart: any;

  // dps2 = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  // chart2: any;

  // dps3 = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  // chart3: any;

  // dps4 = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  // chart4: any;

  // dps5 = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  // chart5: any;

  // dps6 = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  // chart6: any;

  // chartOptions = {
  //   data: [{
  //     type: "line",
  //     dataPoints: this.dps
  //   }],
  //   axisX: {
  //     labelFormatter: function (e) {
  //       return "";
  //     }
  //   }
  // }

  // chartOptions2 = {
  //   data: [{
  //     type: "line",
  //     dataPoints: this.dps2
  //   }],
  //   axisX: {
  //     labelFormatter: function (e) {
  //       return "";
  //     }
  //   }
  // }

  // chartOptions3 = {
  //   data: [{
  //     type: "line",
  //     dataPoints: this.dps3
  //   }],
  //   axisX: {
  //     labelFormatter: function (e) {
  //       return "";
  //     }
  //   }
  // }

  // chartOptions4 = {
  //   data: [{
  //     type: "line",
  //     dataPoints: this.dps4
  //   }],
  //   axisX: {
  //     labelFormatter: function (e) {
  //       return "";
  //     }
  //   }
  // }

  // chartOptions5 = {
  //   data: [{
  //     type: "line",
  //     dataPoints: this.dps5
  //   }],
  //   axisX: {
  //     labelFormatter: function (e) {
  //       return "";
  //     }
  //   }
  // }

  // chartOptions6 = {
  //   data: [{
  //     type: "line",
  //     dataPoints: this.dps6
  //   }],
  //   axisX: {
  //     labelFormatter: function (e) {
  //       return "a";
  //     }
  //   }
  // }

  // getChartInstance(chart: object) {
  //   this.chart = chart;
  //   setTimeout(this.updateChart, 1000);
  // }

  // getChartInstance2(chart: object) {
  //   this.chart2 = chart;
  // }

  // getChartInstance3(chart: object) {
  //   this.chart3 = chart;
  // }

  // getChartInstance4(chart: object) {
  //   this.chart4 = chart;
  // }

  // getChartInstance5(chart: object) {
  //   this.chart5 = chart;
  // }

  // getChartInstance6(chart: object) {
  //   this.chart6 = chart;
  // }

  // updateChart = () => {
  //   var yVal = this.dps[this.dps.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
  //   this.dps.push({ x: this.dps[this.dps.length - 1].x + 1, y: yVal });

  //   if (this.dps.length > 10) {
  //     this.dps.shift();
  //   }

  //   var yVal2 = this.dps2[this.dps2.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
  //   this.dps2.push({ x: this.dps2[this.dps2.length - 1].x + 1, y: yVal2 });

  //   if (this.dps2.length > 10) {
  //     this.dps2.shift();
  //   }

  //   var yVal3 = this.dps3[this.dps3.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
  //   this.dps3.push({ x: this.dps3[this.dps3.length - 1].x + 1, y: yVal3 });

  //   if (this.dps3.length > 10) {
  //     this.dps3.shift();
  //   }

  //   var yVal4 = this.dps4[this.dps4.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
  //   this.dps4.push({ x: this.dps4[this.dps4.length - 1].x + 1, y: yVal4 });

  //   if (this.dps4.length > 10) {
  //     this.dps4.shift();
  //   }

  //   var yVal5 = this.dps5[this.dps5.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
  //   this.dps5.push({ x: this.dps5[this.dps5.length - 1].x + 1, y: yVal5 });

  //   if (this.dps5.length > 10) {
  //     this.dps5.shift();
  //   }

  //   var yVal6 = this.dps6[this.dps6.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
  //   this.dps6.push({ x: this.dps6[this.dps6.length - 1].x + 1, y: yVal6 });

  //   if (this.dps6.length > 10) {
  //     this.dps6.shift();
  //   }

  //   this.chart.render();
  //   this.chart2.render();
  //   this.chart3.render();
  //   this.chart4.render();
  //   this.chart5.render();
  //   this.chart6.render();
  //   setTimeout(this.updateChart, 1000);
  // }

  lineChart1 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Temperature get from Sensors'
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
}