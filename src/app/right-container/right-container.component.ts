import { Component } from '@angular/core';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent {
  constructor(public weatherService: WeatherService) { };
  //function for click of tab Today
  onTodayClick() {
    this.weatherService.today = true;
    this.weatherService.current_week = false;
  }
  //function for click of tab week
  onCurrentWeekClick() {
    this.weatherService.current_week = true;
    this.weatherService.today = false;
  }

  //functions to control metric values

  //function for click of metric celsius
  onCelsiusClick() {
    this.weatherService.celsius = true;
    this.weatherService.fahrenheit = false;
  }

  //function for click of metric Fahrenheit
  onFahrenheitClick() {
    this.weatherService.fahrenheit = true;
    this.weatherService.celsius = false;
  }
}
