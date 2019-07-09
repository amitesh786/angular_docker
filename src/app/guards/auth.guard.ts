import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ConfigUserService } from '../services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    
    constructor(
        private router: Router,
        private configService: ConfigUserService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const configUser = this.configService.currentUserValue;

        if (configUser && configUser.token) {
            // authorised so return true
            return true;
        }
        
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
