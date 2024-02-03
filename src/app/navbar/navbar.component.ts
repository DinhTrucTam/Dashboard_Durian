import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    // visibility of badge
    badgevisible = false;
    badgevisibility() {
        this.badgevisible = true;
    }
}