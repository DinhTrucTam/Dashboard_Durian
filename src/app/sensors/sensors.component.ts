import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent {
  lsn50v2S31BSensors = [
    { title: 'Air Temperature', details: 'Sensor details here...' },
    { title: 'Air Humidity',    details: 'Sensor details here...' },
    { title: 'Alarm',           details: 'Sensor details here...' },
    { title: 'Battery',         details: 'Sensor details here...' },
    { title: 'Status',          details: 'Sensor details here...' },
  ];

  lse018Sensors = [
    { title: 'Soil Temperature', details: 'Sensor details here...' },
    { title: 'Soil Moisture',    details: 'Sensor details here...' },
    { title: 'Soil EC',          details: 'Sensor details here...' },
    { title: 'Battery',          details: 'Sensor details here...' },
    { title: 'Status',           details: 'Sensor details here...' },
  ];

  lsn50v28Sensors = [
    { title: 'Air Temperature', details: 'Sensor details here...' },
    { title: 'Illuminance',     details: 'Sensor details here...' },
    { title: 'Battery',         details: 'Sensor details here...' },
    { title: 'Status',          details: 'Sensor details here...' },
  ];
}
