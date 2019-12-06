import { Component, OnInit } from '@angular/core';
import { OpencagedataService } from 'src/app/services/opencagedata.service';

@Component({
    selector: 'app-geolocation',
    templateUrl: './geolocation.component.html',
    styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
    public currentLatitude: any;
    public currentLongitude: any;
    public region: any;

    public constructor(private opencagedataService: OpencagedataService) {}

    public ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.currentLatitude = position.coords.latitude;
                this.currentLongitude = position.coords.longitude;

                this.getCity();
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    private getCity() {
        this.opencagedataService
            .getByReverseGeocoding(this.currentLatitude, this.currentLongitude)
            .subscribe((data) => (this.region = data.results[0].components));
    }
}
