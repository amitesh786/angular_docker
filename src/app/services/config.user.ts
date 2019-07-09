import { Injectable } from '@angular/core';
import { GlobalVariable } from '../globals/global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ConfigUser } from '../models/config.user';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const configJson = require('../config/config.json');

@Injectable({
    providedIn: 'root'
})
export class ConfigUserService {
    private currentUserSubject: BehaviorSubject<ConfigUser>;
    public currentUser: Observable<ConfigUser>;

    private static readonly REST_ENDPOINT = `${GlobalVariable.CONFIG}`

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<ConfigUser>(configJson);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): ConfigUser {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): Observable<ConfigUser>{

        return this.http.post<ConfigUser>(`${GlobalVariable.CONFIG.apiUrl}/username/password`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    getAuthorizationHeaders() {
        
        let currentUser = this.currentUserValue;

        // Authorization add
        let authorizationData = `${currentUser.token}`
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            // Authorization: authorizationData
        });
        return headers;
    }
}
