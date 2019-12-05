import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
    selector: 'app-chart2',
    templateUrl: './chart2.component.html',
    styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

    // PolarArea
    public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
    public polarAreaLegend = true;

    public polarAreaChartType: ChartType = 'polarArea';

    constructor() { }

    ngOnInit() {
    }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

}
