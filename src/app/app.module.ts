import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

// used to create fake backend
import { fakeBackendProvider } from './helpers';

// App component import
import { AppComponent } from './app.component';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { AlertComponent } from './views/alert';
import { JwtInterceptor, ErrorInterceptor } from './helpers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { FooterComponent } from './views/footer/footer.component';
import { RegisterComponent } from './views/register/register.component';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

const APP_CONTAINERS = [
    DefaultLayoutComponent
];

import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
} from '@coreui/angular';

// Import 3rd party components
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DialogService } from 'primeng/components/common/api';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        ChartsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        ButtonsModule.forRoot(),
        TableModule,
        MultiSelectModule,
        DynamicDialogModule,
        ButtonModule,
        ModalModule.forRoot(),
        DropdownModule,
        CheckboxModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        ...APP_CONTAINERS,
        P404Component,
        P500Component,
        LoginComponent,
        FooterComponent,
        RegisterComponent
    ],
    providers: [
        {
          provide: LocationStrategy,
          useClass: HashLocationStrategy,
        },

        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
