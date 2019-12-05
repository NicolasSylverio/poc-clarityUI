import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-chart-menu',
    templateUrl: './chart-menu.component.html',
    styleUrls: ['./chart-menu.component.css']
})
export class ChartMenuComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }


    private onClick1() {
        this.router.navigate([`chart1`]);
    }

    private onClick2() {
        this.router.navigate([`chart2`]);
    }

    private onClick3() {
        this.router.navigate([`chart3`]);
    }

    private onClick4() {
        this.router.navigate([`chart4`]);
    }

    private onClick5() {
        this.router.navigate([`chart5`]);
    }

    private onClick6() {
        this.router.navigate([`chart6`]);
    }

    private onClick7() {
        this.router.navigate([`chart7`]);
    }

    private onClick8() {
        this.router.navigate([`chart8`]);
    }

}
