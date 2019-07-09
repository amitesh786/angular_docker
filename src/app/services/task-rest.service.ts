import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../globals/global'
import { Observable } from 'rxjs';
import { TaskSummary } from '../models';

@Injectable({
    providedIn: 'root'
})
export class TaskRestService {

    constructor(private http: HttpClient) { }

    getTaskData(): Observable<any> {
        return this.http.get<TaskSummary[]>(`${GlobalVariable.baseUrl}/assets/showcase/data/cars-small.json`);
    }    
}
