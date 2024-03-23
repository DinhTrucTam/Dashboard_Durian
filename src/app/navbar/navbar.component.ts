import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_login_services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    // visibility of badge
    badgevisible = false;
    badgevisibility() {
        this.badgevisible = true;
    }
    constructor(public auth: AuthService) { }

    ngOnInit(): void {
    }
}