import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { WebcamImage, WebcamInitError } from 'ngx-webcam';

@Component({
    selector: 'app-camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnDestroy, OnInit {

    // latest snapshot
    public captures: Array<WebcamImage>;
    // device id
    public deviceId: string;

    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();

    public ngOnInit() {
        this.captures = [];
    }
    public ngOnDestroy() {
        this.trigger.unsubscribe();
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    public cameraWasSwitched(deviceId: string): void {
        this.deviceId = deviceId;
    }
    public handleImage(webcamImage: WebcamImage) {
        console.log(webcamImage);
        this.captures.push(webcamImage);
    }
    public handleImageClick() {
        this.trigger.next();
    }
    public capture() {
        this.trigger.next();
    }
    public handleInitError(error: WebcamInitError) {
        if (
            error.mediaStreamError &&
            error.mediaStreamError.name === 'NotAllowedError'
        ) {
            console.warn('Camera access was not allowed by user!');
        }
    }

}
