import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

// Different component import
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './guards';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
        title: 'Login Page'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
        title: 'Register Page'
        }
    },
    {
        path: '404',
        component: P404Component,
        data: {
        title: 'Page 404'
        }
    },
    {
        path: '500',
        component: P500Component,
        data: {
        title: 'Page 500'
        }
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'tasks',
                loadChildren: () => import('./views/tasks/tasks.module').then(m => m.TaskDeskModule)
            }
        ],
        canActivate: [ AuthGuard ]
    },
    {
        path: '**',
        component: P404Component
    }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, {
            paramsInheritanceStrategy: 'always'
        })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
