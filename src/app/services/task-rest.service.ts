import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const configJson = require('../data/jsonRes.json');

@Injectable({
    providedIn: 'root'
})
export class TaskRestService {

    constructor() { }

    getTaskData() {
        return configJson.data;
    }
}
