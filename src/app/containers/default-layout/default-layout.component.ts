import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../nav';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User, Container, ConfigUser } from '../../models';
import { UserService, ConfigUserService } from '../../services';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
    
    public navItems = navItems;
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement;

    // using config user
    currentUser: ConfigUser;

    currentUserSubscription: Subscription;
    users: User[] = [];
    containers: Container[] = [];

    constructor(
        private router: Router,
        private configService: ConfigUserService,
        private userService: UserService,

        @Inject(DOCUMENT) _document?: any
    ) {

        this.changes = new MutationObserver((mutations) => {
            this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(<Element>this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
      
        // current user authentication
        this.currentUserSubscription = this.configService.currentUser.subscribe(user => {
            this.currentUser = user;
        });

    }

    logout() {
        this.configService.logout();
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        this.loadAllUsers();
    }
    

    ngOnDestroy(): void {
        this.changes.disconnect();

        // unsubscribe to ensure no memory leaks
        if(this.currentUserSubscription) {
            this.currentUserSubscription.unsubscribe();
        }
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {

        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}
