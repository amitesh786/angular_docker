import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GlobalVariable } from '../globals/global';
import { Observable } from 'rxjs';

import { Container } from '../models/container';
import { ConfigUserService } from './config.user';

@Injectable({
    providedIn: 'root'
})
export class ContainerService {

    containerInstance: Container[];
    
    constructor(
        private http: HttpClient,
        private configService: ConfigUserService
    ){}

    getContainerInfo():Observable<any> {
        let url = `${GlobalVariable.baseUrl}/services/rest/server/containers`;

        // get authorization headers
        let headers = this.configService.getAuthorizationHeaders();

        return this.http.get<Container[]>(url, {headers});
    }

    getContainerId(id: String) {
        let url = `${GlobalVariable.baseUrl}/services/rest/server/containers/${id}`;

        // get authorization headers
        let headers = this.configService.getAuthorizationHeaders();

        return this.http.get<Container[]>(url, {headers});
    }
}
