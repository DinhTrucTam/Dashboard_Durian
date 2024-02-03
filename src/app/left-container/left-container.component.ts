import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css']
})
export class LeftContainerComponent {
  // variables for fa icons


  // variables for left navbar search icons
  faMagnifyingGlass: any = faMagnifyingGlass;
  faLocation: any = faLocation;


  // variables for temperature summary
  faCloud: any = faCloud;
  faCloudRain: any = faCloudRain;

  constructor(public weatherService: WeatherService) {
  }
}
