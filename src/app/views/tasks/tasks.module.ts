// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Comment lifecycle_hooks is not resolved inside primeng/table
import { TableModule } from 'primeng/table';

// Process Instance Component
import { TaskComponent } from './tasks.component';

// Components Routing
import { TaskRoutingModule } from './tasks-routing.module';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

// Message on right corner
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TaskRoutingModule,
        BsDropdownModule.forRoot(),
        TableModule,
        PopoverModule.forRoot(),
        ButtonModule,
        MenuModule,
        ToastModule,
        PaginatorModule,
        ModalModule.forRoot(),
        DropdownModule,
        CheckboxModule
    ],
    declarations: [
        TaskComponent
    ]
})
export class TaskDeskModule { }
