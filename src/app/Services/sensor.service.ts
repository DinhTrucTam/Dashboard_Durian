import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SensorService{
    private socket: Socket;
    private url = 'http://localhost:3001'; // your server local path

    constructor() {
        this.socket = io(this.url, { transports: ['websocket', 'polling', 'flashsocket'] });
    }

    // Listen for temperature light sensor data
    receiveTemperatureLightSensorData(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('temperatureLightSensorData', (data: any) => {
                observer.next(data);
            });
        });
    }

    // Listen for temperature humidity EC sensor data
    receiveTemperatureHumidityECData(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('temperatureHumidityEC', (data: any) => {
                observer.next(data);
            });
        });
    }

    // Listen for temperature humidity sensor data
    receiveTemperatureHumidityData(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('temperatureHumidity', (data: any) => {
                observer.next(data);
            });
        });
    }

    // Listen for disconnect event
    onDisconnect(): Observable<void> {
        return new Observable<void>(observer => {
            this.socket.on('disconnect', () => {
                observer.next();
            });
        });
    }
}
