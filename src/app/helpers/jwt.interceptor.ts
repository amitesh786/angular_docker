import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConfigUserService } from '../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private configUser: ConfigUserService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.configUser.currentUserValue;

        if (currentUser && currentUser["token"]) {
            request = request.clone({
                setHeaders: {
                    // "Authorization": `${this.token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        }
        return next.handle(request);
    }

    get token() {
        const user = this.configUser.currentUserValue;
        return user.token;
    }
}
