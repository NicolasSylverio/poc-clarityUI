import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OpencagedataService {
    private apikey = '';

    constructor(private httpClient: HttpClient) {}

    public getByReverseGeocoding(
        latitude: string,
        longitude: string
    ): Observable<any> {
        return this.httpClient.get<any>(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${this.apikey}`
        );
    }
}
