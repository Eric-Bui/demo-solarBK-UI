import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  chart1 = {
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Premium",
          data: [500, 800, 600, 1200, 800, 2000, 600],
          // backgroundColor: "transparent",
          borderColor: "#339836",
          borderWidth: 2,
        },
        // {
        //   label: "Free",
        //   data: [100, 60, 80, 50, 140, 60, 100],
        //   backgroundColor: "transparent",
        //   borderColor: "#36a2eb",
        //   borderWidth: 2,
        // },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "white",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 8,
              padding: 10,
            },
            gridLines: { color: "white", drawBorder: false }
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "white",
            },
            gridLines: { color: "transparent" }
          },
        ],
      },
      responsive: true,
      legend: {
        position: "bottom",
        display: false,
      },
        elements: {
            point:{
                radius: 0
            }
        }
    },
  };
  chart2 = {
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Population",
          data: [50, 80, 60, 120, 80, 100, 60],
          backgroundColor: "#339836",
        },
      ],
    },
    options: {
      barValueSpacing: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "white",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 8,
              padding: 10,
            },
            gridLines: { color: "white", drawBorder: false }
          },
        ],
        xAxes: [
          {
            barPercentage: 0.25,
            ticks: {
              fontColor: "white",
            },
            gridLines: { color: "transparent" }
          },
        ],
      },
      //responsive: true,
      legend: {
        position: "top",
        labels: {
          // This more specific font property overrides the global property
          fontColor: '#fff'
        }
      },
      title: {
        display: true,
        text: "Title",
        position: "left",
      },
      plugins: {
        datalabels: {
          color: "white",
          display: true,
          align: "center",
          anchor: "center",
        },
      },
      chartArea: {
        backgroundColor: '#054523'
    }
    },
  };

  constructor() { }

  ngOnInit(): void {
    this.generateChart();
  }

  generateChart() {
    new Chart("chart-line", {
      type: "line",
      data: this.chart1.data,
      options: this.chart1.options,
    });
    new Chart("chart-bar", {
      type: "bar",
      data: this.chart2.data,
      options: this.chart2.options,
    });
  }

}
