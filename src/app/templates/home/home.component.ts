import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    private onClickCharts() {
        this.router.navigate([`chart`]);
    }

    private onClickEmprestimo() {
        this.router.navigate([`ofertas`]);
    }

    private onClickCamera() {
        this.router.navigate([`camera`]);
    }

    private onClickLog() {
        this.router.navigate([`log`]);
    }

    public onClickGeolocation() {
        this.router.navigate([`geolocation`]);
    }
}
