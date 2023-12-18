import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Air Temperature',  cols: 1, rows: 1 },
          { title: 'Air Humidity',     cols: 1, rows: 1 },
          { title: 'Soil Temperature', cols: 1, rows: 1 },
          { title: 'Soil Moisture',    cols: 1, rows: 1 },
          { title: 'Soil EC',          cols: 1, rows: 1 },
          { title: 'Illuminance ',     cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Air Temperature',    cols: 1, rows: 1 },
        { title: 'Air Humidity',       cols: 1, rows: 1 },
        { title: 'Soil Temperature',   cols: 1, rows: 1 },
        { title: 'Soil Moisture',      cols: 1, rows: 1 },
        { title: 'Soil EC',            cols: 1, rows: 1 },
        { title: 'Illuminance',        cols: 1, rows: 1 },
      ];
    })
  );
}
