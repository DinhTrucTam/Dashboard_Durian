// dashboard-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DashboardDataService {
    Dashboard_Header = [
        { title: 'Sensors', info: 'Number of current sensors', values: '3', },
        { title: 'Gateway', info: 'Gateway status', values: 'Good' },
        { title: 'Lights', info: 'Light status', values: 'On' },
        { title: 'Canopy', info: 'Canopy status', values: 'On' },
    ];

    Air_Information = [
        { title: 'Temperature', temp: '30', imageUrl: "assets/centigrade.png" },
        { title: 'Humidity', humid: '30', imageUrl: "assets/humidity.png" },
        { title: 'Illuminance', illum: '30', imageUrl: "assets/contrast.png" },
    ];

    Soil_Information = [
        { title: 'Temperature', temp: '70', imageUrl: "assets/soil_temp.png" },
        { title: 'Moisture', moist: '70', imageUrl: "assets/hydrated-skin.gif" },
        { title: 'EC', EC: '200', imageUrl: "assets/electricity.gif" },
    ];

    constructor() { }
}
