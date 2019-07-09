import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { SelectItem } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filtering.component.html',
    styleUrls: ['./filtering.component.scss']
})
export class FilterComponent implements OnInit {
    @ViewChild('largeModal', {static: false}) public largeModal: ModalDirective;

    public show():void { this.largeModal.show(); }
    public hide():void { this.largeModal.hide(); }

    @Output() filterOutput = new EventEmitter();
        
    cars: SelectItem[];
    selectedCar: string;
    status: string[] = [];
    public params: string[] = [];

    constructor() {}
    
    ngOnInit() {
        
        this.cars = [
            { label: 'Id', value: 'Id' },
            { label: 'Nome', value: 'Nome' },
            { label: 'Owner attività', value: 'Owner attività' },
            { label: 'Stato', value: 'Stato' }
        ];
    }

    onSubmit(form: NgForm) {
        this.hide();
        console.log(form.value);
        
        if (this.status && this.status.length > 0) {
            this.params = this.status;
            this.filterOutput.emit(this.params);
        } else if (this.selectedCar && this.selectedCar != "") {
            this.params = [].concat(this.selectedCar);
            this.filterOutput.emit(this.params);
        } else {
            this.filterOutput.emit(this.status);
        }
    }
}
