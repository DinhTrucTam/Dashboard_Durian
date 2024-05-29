import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherDetails } from '../Models/WeatherDetails';
import { TemperatureData } from '../Models/TemperatureData';
import { TodayData } from '../Models/TodayData';
import { WeekData } from '../Models/WeekData';
import { TodayHighlights } from '../Models/TodayHighlights';
import { Observable, timer } from 'rxjs';
import { EnvironmentVariables } from '../Environment/EnvironmentVariables';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // Variables which will be filled by API Endpoints
  // locationDetails?: LocationDetails;
  weatherDetails?: WeatherDetails;


  // Variables that have the extracted data from the API Endpoint Variables
  temperatureData: TemperatureData;   // left-container data

  todayData?: TodayData[] = [];       // right-container data
  weekData?: WeekData[] = [];         // right-container data
  todayHighlights?: TodayHighlights;  // right-container data


  // Variables used for API calls
  // cityName: string = 'Ho Chi Minh City';
  language: string = 'en-US';
  date: string = '20240202';
  units: string = 'm';


  // Variable holds the current time
  currentTime: Date;

  // Variables to control tabs
  today: boolean = false;
  current_week: boolean = true;

  // Variables to control metrics
  celsius: boolean = true;
  fahrenheit: boolean = false;

  // Constructor calls method getData
  constructor(private httpClient: HttpClient) {
    //  REMEMBER TO COMMENT THESE BELOW LINES WHEN DEBUGGING

    this.getData();
    timer(12 * 60 * 60 * 1000, 12 * 60 * 60 * 1000).subscribe(() => {
      this.getData();
    });
  }


  getSummaryImageLeftContainer(summary: string, time: string): string {
    // Base folder Address containing the images
    var baseAddress = './../../assets/';

    // Respective image names
    var cloudySunny = 'Sunny + Cloudy.png';
    var cloudy = 'Cloudy.png';
    var windy = 'wind.png';
    var sunny = 'Sunny.png';
    var smallRainy = 'Small Rain.png';
    var strongRainy = 'Strong Rain.png';
    var lightningRainy = 'Rain + Lightning.png';
    var night_time = 'Night-time.png';

    if (String(time).slice(0, 2) == "19" ||
      String(time).slice(0, 2) == "20" ||
      String(time).slice(0, 2) == "21" ||
      String(time).slice(0, 2) == "22" ||
      String(time).slice(0, 2) == "23" ||
      String(time).slice(0, 2) == "00" ||
      String(time).slice(0, 2) == "01" ||
      String(time).slice(0, 2) == "02" ||
      String(time).slice(0, 2) == "03" ||
      String(time).slice(0, 2) == "04" ||
      String(time).slice(0, 2) == "05") return baseAddress + night_time;
    else {
      // Return image based on summary phrase
      if (String(summary).includes("Partly Cloudy") || String(summary).includes("P Cloudy")) return baseAddress + cloudySunny;
      else if (String(summary).includes("Mostly Cloudy")) return baseAddress + cloudy;
      else if (String(summary).includes("Partly Rainy") || String(summary).includes("P Rainy")) return baseAddress + smallRainy;
      else if (String(summary).includes("wind")) return baseAddress + windy;
      else if (String(summary).includes("rain")) return baseAddress + lightningRainy;
      else if (String(summary).includes("Sun")) return baseAddress + sunny;
    }

    // Default return
    return baseAddress + cloudySunny;
  }

  getSummaryImageforWeek(summary: string): string {
    // Base folder Address containing the images
    var baseAddress = './../../assets/';

    // Respective image names
    var cloudySunny = 'Sunny + Cloudy.png';
    var cloudy = 'Cloudy.png';
    var windy = 'wind.png';
    var sunny = 'Sunny.png';
    var smallRainy = 'Small Rain.png';
    var strongRainy = 'Strong Rain.png';
    var lightningRainy = 'Rain + Lightning.png';
    var night_time = 'Night-time.png';

    // Return image based on summary phrase
    if (String(summary).includes("Partly Cloudy") || String(summary).includes("P Cloudy")) return baseAddress + cloudySunny;
    else if (String(summary).includes("Mostly Cloudy")) return baseAddress + cloudy;
    else if (String(summary).includes("Partly Rainy") || String(summary).includes("P Rainy")) return baseAddress + smallRainy;
    else if (String(summary).includes("wind")) return baseAddress + windy;
    else if (String(summary).includes("rain")) return baseAddress + lightningRainy;
    else if (String(summary).includes("Sun")) return baseAddress + sunny;

    // Default return
    return baseAddress + cloudySunny;
  }

  // Method to create a chunk of data for left-container using model TemperatureData
  fillTemperatureDataModel() {
    this.currentTime = new Date();
    this.temperatureData.day = this.weatherDetails['v3-wx-observations-current'].dayOfWeek;
    this.temperatureData.time = `${String(this.currentTime.getHours()).padStart(2, '0')}:${String(this.currentTime.getMinutes()).padStart(2, '0')}`;
    this.temperatureData.temperature = this.weatherDetails['v3-wx-observations-current'].temperature;
    this.temperatureData.location = this.weatherDetails['v3-location-point'].location.city;
    this.temperatureData.rainPercent = this.weatherDetails['v3-wx-observations-current'].precip24Hour;
    this.temperatureData.summaryPhrase = this.weatherDetails['v3-wx-observations-current'].wxPhraseShort;
    this.temperatureData.summaryImage = this.getSummaryImageLeftContainer(this.temperatureData.summaryPhrase, this.temperatureData.time);
  }


  // Method to create a chunk of data for right-container using model WeekData
  fillWeekData() {
    var weekCount = 0;
    while (weekCount < 7) {
      this.weekData.push(new WeekData());
      this.weekData[weekCount].day = this.weatherDetails['v3-wx-forecast-daily-15day'].dayOfWeek[weekCount].slice(0, 3);
      this.weekData[weekCount].maxTemperature = this.weatherDetails['v3-wx-forecast-daily-15day'].calendarDayTemperatureMax[weekCount];
      this.weekData[weekCount].minTemperature = this.weatherDetails['v3-wx-forecast-daily-15day'].calendarDayTemperatureMin[weekCount];
      this.weekData[weekCount].summaryImage = this.getSummaryImageforWeek(this.weatherDetails['v3-wx-forecast-daily-15day'].narrative[weekCount]);
      weekCount++;
    }
  }


  // Method to create a chunk of data for right-container using model TodayData
  fillTodayData() {
    var todayCount = 0;
    while (todayCount < 8) {
      this.todayData.push(new TodayData());
      this.todayData[todayCount].time = this.weatherDetails['v3-wx-forecast-hourly-10day'].validTimeLocal[todayCount].slice(11, 16);
      this.todayData[todayCount].temperature = this.weatherDetails['v3-wx-forecast-hourly-10day'].temperature[todayCount];
      this.todayData[todayCount].summaryImage = this.getSummaryImageLeftContainer(this.weatherDetails['v3-wx-forecast-hourly-10day'].wxPhraseShort[todayCount], this.todayData[todayCount].time);
      todayCount++;
    }
  }

  // Method to cut the timestamp from string
  getTimeFromString(localTime: string) {
    return localTime.slice(11, 16);
  }

  // Method to create a chunk of data for right-container using model TodayHighlights
  fillTodayHighlights() {
    this.todayHighlights.id = this.weatherDetails.id;
    this.todayHighlights.uvIndex = this.weatherDetails['v3-wx-observations-current'].uvIndex;
    this.todayHighlights.uvDescription = this.weatherDetails['v3-wx-observations-current'].uvDescription;
    this.todayHighlights.windSpeed = this.weatherDetails['v3-wx-observations-current'].windSpeed;
    this.todayHighlights.sunrise = this.getTimeFromString(this.weatherDetails['v3-wx-observations-current'].sunriseTimeLocal);
    this.todayHighlights.sunset = this.getTimeFromString(this.weatherDetails['v3-wx-observations-current'].sunsetTimeLocal);
    this.todayHighlights.rainfall = this.weatherDetails['v3-wx-observations-current'].precip24Hour;
    this.todayHighlights.minTemperature = this.weatherDetails['v3-wx-forecast-daily-15day'].calendarDayTemperatureMin[0];
    this.todayHighlights.maxTemperature = this.weatherDetails['v3-wx-forecast-daily-15day'].calendarDayTemperatureMax[0];
  }

  // Method to create useful data chunks for UI using the data received from the API
  prepareData(): void {
    // Setting left-container data model properties
    this.fillTemperatureDataModel();
    this.fillWeekData();
    this.fillTodayData();
    this.fillTodayHighlights();
    console.log(this.temperatureData);
    console.log(this.weekData);
    console.log(this.todayData);
    console.log(this.todayHighlights);
  }

  celsiusToFahrenheit(celsius: number): number {
    return +((celsius * 1.8) + 32).toFixed(2);
  }

  fahrenheitToCelsius(fahrenheit: number): number {
    return +((fahrenheit - 32) * 0.555).toFixed(2);
  }

  // Method to get location details from the API using the variale cityName as the Input
  // getLocationDetails(cityName: string, language: string): Observable<LocationDetails> {
  //   return this.httpClient.get<LocationDetails>(EnvironmentVariables.weatherApiLocationBaseURL, {
  //     headers: new HttpHeaders()
  //       .set(EnvironmentVariables.xRapidApiKeyName, EnvironmentVariables.xRapidApiKeyValue)
  //       .set(EnvironmentVariables.xRapidApiHostName, EnvironmentVariables.xRapidApiHostValue),
  //     params: new HttpParams()
  //       .set('query', cityName)
  //       .set('language', language)
  //   })
  // }

  getWeatherReport(date: string, latitude: number, longitude: number, language: string, units: string): Observable<WeatherDetails> {
    return this.httpClient.get<WeatherDetails>(EnvironmentVariables.weatherApiForecastBaseURL, {
      headers: new HttpHeaders()
        .set(EnvironmentVariables.xRapidApiKeyName, EnvironmentVariables.xRapidApiKeyValue)
        .set(EnvironmentVariables.xRapidApiHostName, EnvironmentVariables.xRapidApiHostValue),
      params: new HttpParams()
        .set('date', date)
        .set('latitude', latitude)
        .set('longitude', longitude)
        .set('language', language)
        .set('units', units)
    });
  }

  getData() {
    this.todayData = [];
    this.weekData = [];
    this.temperatureData = new TemperatureData();
    this.todayHighlights = new TodayHighlights();
    var latitude = 0;
    var longitude = 0;

    // this.getLocationDetails(this.cityName, this.language).subscribe({
    //   next: (response) => {
    //     this.locationDetails = response;
    //     latitude = this.locationDetails?.location.latitude[0];
    //     longitude = this.locationDetails?.location.longitude[0];

    // Once we get the values for latitude and longitude, we can call for the getWeatherReport method
    this.getWeatherReport(this.date, latitude, longitude, this.language, this.units).subscribe({
      next: (response) => {
        this.weatherDetails = response;
        this.prepareData();
      }
    })
  }
  //   });
  // }
}
