import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SensorDataService {
    lsn50v2S31BSensors = [
        { title: 'Air Temperature', temperature_first: '-', imageUrl: "assets/centigrade.png" },
        { title: 'Air Humidity', humidty_first: '-', imageUrl: "assets/humidity.png" },
        { title: 'Warning', alarm_first: '-', imageUrl: "assets/temp_warning.png" },
        { title: 'Battery Capacity', battery_first: '-', imageUrl: "assets/smartphone-charger.png" },
        {
            title: 'Overall Status', status: {
                connection: 'Disconnected',
                battery: '-',
                lastUpdated: '-'
            },
            imageUrl: "assets/clipboard.png"
        },
    ];

    lse018Sensors = [
        { title: 'Soil Temperature', temperature_second: '-', imageUrl: "assets/soil_temp.png" },
        { title: 'Soil Moisture', moisture_second: '-', imageUrl: "assets/moisturizing.png" },
        { title: 'Soil EC', EC_second: '-', imageUrl: "assets/eco-energy.png" },
        { title: 'Battery Capacity', battery_second: '-', imageUrl: "assets/smartphone-charger.png" },
        {
            title: 'Overall Status', status: {
                connection: 'Disconnected',
                battery: '-',
                lastUpdated: '-'
            },
            imageUrl: "assets/clipboard.png"
        },
    ];

    lsn50v28Sensors = [
        { title: 'Air Temperature', temperature_third: '-', imageUrl: "assets/centigrade.png" },
        { title: 'Illuminance', illum_third: '-', imageUrl: "assets/contrast.png" },
        { title: 'Battery Capacity', battery_third: '-', imageUrl: "assets/smartphone-charger.png" },
        {
            title: 'Overall Status', status: {
                connection: 'Disconnected',
                battery: '-',
                lastUpdated: '-'
            },
            imageUrl: "assets/clipboard.png"
        },
    ];

    constructor() { }
}
