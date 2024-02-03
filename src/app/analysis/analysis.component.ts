import { Component } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  dps = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  chart: any;

  dps2 = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  chart2: any;

  dps3 = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  chart3: any;

  dps4 = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  chart4: any;

  dps5 = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  chart5: any;

  dps6 = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  chart6: any;

  chartOptions = {
    // exportEnabled: true,
    // title: {
    //   text: "Angular Dynamic Chart"
    // },
    data: [{
      type: "line",
      dataPoints: this.dps
    }]
  }

  chartOptions2 = {
    // exportEnabled: true,
    // title: {
    //   text: "Angular Dynamic Chart"
    // },
    data: [{
      type: "line",
      dataPoints: this.dps2
    }]
  }

  chartOptions3 = {
    // exportEnabled: true,
    // title: {
    //   text: "Angular Dynamic Chart"
    // },
    data: [{
      type: "line",
      dataPoints: this.dps3
    }]
  }

  chartOptions4 = {
    // exportEnabled: true,
    // title: {
    //   text: "Angular Dynamic Chart"
    // },
    data: [{
      type: "line",
      dataPoints: this.dps4
    }]
  }

  chartOptions5 = {
    // exportEnabled: true,
    // title: {
    //   text: "Angular Dynamic Chart"
    // },
    data: [{
      type: "line",
      dataPoints: this.dps5
    }]
  }

  chartOptions6 = {
    // exportEnabled: true,
    // title: {
    //   text: "Angular Dynamic Chart"
    // },
    data: [{
      type: "line",
      dataPoints: this.dps6
    }]
  }

  getChartInstance(chart: object) {
    this.chart = chart;
    setTimeout(this.updateChart, 1000); //Time series updated every 1 second
  }

  getChartInstance2(chart: object) {
    this.chart2 = chart;
    // setTimeout(this.updateChart, 1000); //Time series updated every 1 second
  }

  getChartInstance3(chart: object) {
    this.chart3 = chart;
    // setTimeout(this.updateChart, 1000); //Time series updated every 1 second
  }

  getChartInstance4(chart: object) {
    this.chart4 = chart;
    // setTimeout(this.updateChart, 1000); //Time series updated every 1 second
  }

  getChartInstance5(chart: object) {
    this.chart5 = chart;
    // setTimeout(this.updateChart, 1000); //Time series updated every 1 second
  }

  getChartInstance6(chart: object) {
    this.chart6 = chart;
    // setTimeout(this.updateChart, 1000); //Time series updated every 1 second
  }

  updateChart = () => {
    var yVal = this.dps[this.dps.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
    this.dps.push({ x: this.dps[this.dps.length - 1].x + 1, y: yVal });

    if (this.dps.length > 10) {
      this.dps.shift();
    }

    var yVal2 = this.dps2[this.dps2.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
    this.dps2.push({ x: this.dps2[this.dps2.length - 1].x + 1, y: yVal2 });

    if (this.dps2.length > 10) {
      this.dps2.shift();
    }

    var yVal3 = this.dps3[this.dps3.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
    this.dps3.push({ x: this.dps3[this.dps3.length - 1].x + 1, y: yVal3 });

    if (this.dps3.length > 10) {
      this.dps3.shift();
    }

    var yVal4 = this.dps4[this.dps4.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
    this.dps4.push({ x: this.dps4[this.dps4.length - 1].x + 1, y: yVal4 });

    if (this.dps4.length > 10) {
      this.dps4.shift();
    }

    var yVal5 = this.dps5[this.dps5.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
    this.dps5.push({ x: this.dps5[this.dps5.length - 1].x + 1, y: yVal5 });

    if (this.dps5.length > 10) {
      this.dps5.shift();
    }

    var yVal6 = this.dps6[this.dps6.length - 1].y + Math.round(5 + Math.random() * (-5 - 5));
    this.dps6.push({ x: this.dps6[this.dps6.length - 1].x + 1, y: yVal6 });

    if (this.dps6.length > 10) {
      this.dps6.shift();
    }

    this.chart.render();
    this.chart2.render();
    this.chart3.render();
    this.chart4.render();
    this.chart5.render();
    this.chart6.render();
    setTimeout(this.updateChart, 1000); //New value updated every 1 second
  }
}
