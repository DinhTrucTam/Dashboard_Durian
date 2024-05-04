import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  private data = {
    SoilTemperatureData: [],
    temperatureLatestData: [],
    illuminanceLatestData: [],
    SoilHumidityData: [],
    electricalConductivityData: [],
    humidityData: [],
  };

  private dataSubject = new Subject<any>();

  private socket: Socket;
  private url: string = 'http://localhost:3001';

  constructor() {
    this.socket = io(this.url);
    this.setupSocketListeners();
  }

  private setupSocketListeners() {
    // Listen for socket events and update data accordingly
    this.socket.on('SoilTemperatureData', (data: any) => {
      this.data.SoilTemperatureData.push(parseFloat(data)); // Parse as float before pushing
      this.emitData();
    });

    this.socket.on('temperatureLatestData', (data: any) => {
      this.data.temperatureLatestData.push(parseFloat(data)); // Parse as float before pushing
      this.emitData();
    });

    this.socket.on('illuminanceLatestData', (data: any) => {
      this.data.illuminanceLatestData.push(parseFloat(data)); // Parse as float before pushing
      this.emitData();
    });

    this.socket.on('SoilHumidityData', (data: any) => {
      this.data.SoilHumidityData.push(parseFloat(data)); // Parse as float before pushing
      this.emitData();
    });

    this.socket.on('electricalConductivityData', (data: any) => {
      this.data.electricalConductivityData.push(parseFloat(data)); // Parse as float before pushing
      this.emitData();
    });

    this.socket.on('humidityData', (data: any) => {
      this.data.humidityData.push(parseFloat(data)); // Parse as float before pushing
      this.emitData();
    });
  }

  private emitData() {
    // Parse each data point before emitting
    const parsedData = Object.keys(this.data).reduce((acc, key) => {
      acc[key] = this.data[key].map((value: any) => parseFloat(value));
      return acc;
    }, {} as { [key: string]: number[] });
    console.log('parsed data:', JSON.stringify(parsedData));
    this.dataSubject.next(parsedData);
  }

  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }
}
