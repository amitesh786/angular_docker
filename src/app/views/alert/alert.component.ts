import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../../services';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => { 
            this.message = message; 
            if (this.message) {
                setTimeout(() => this.removeAlert(message), 5000);
            }
        });
    }
    
    removeAlert(message) {
        this.message = null;
    }

    ngOnDestroy() {
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
