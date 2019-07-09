import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { TaskSummary } from '../../models';

import { Subscription } from 'rxjs';
import { TaskRestService } from '../../services/task-rest.service';
import { first } from 'rxjs/operators';
import { MenuItem } from 'primeng/components/common/menuitem';

// Message after fetch data
import { MessageService } from 'primeng/api';

@Component({
    selector: 'task-table',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    providers: [ MessageService ]
})
export class TaskComponent implements OnInit, OnDestroy {

    loading: Boolean = true;

    // Subscription for different container
    private subscriptionTask: Subscription;
    private subscriptionTaskClaim: Subscription;

    // Instance for process and container
    taskSummary: TaskSummary[];
    menuActions: MenuItem[];

    totalRecords: Number = 0;
    params: [];
    
    constructor(
        private router: Router,
        private taskRestService: TaskRestService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.menuActions = [
            {   
                label: 'Dettaglio evento',
                icon: 'fa fa-paste'
            }
        ];

        this.subscriptionTask = this.taskRestService.getTaskData()
            .pipe(first())
            .subscribe(
                tasks => {

                    this.taskSummary = tasks
                    this.loading = false;
                },
                error => {
                    //this.alertService.error(error);
                    this.loading = false;
                }           
            );
    }

    getMenuItemsForItem(data: TaskSummary): MenuItem[] {

        let menu = [];
        let rows = [];
        
        if (data["task-status"] === "Ready") {

            menu = [].concat(
                {   
                    id: "1",
                    label: 'Open',
                    icon: 'fa fa-wrench',
                    // command: e => { this.fnTaskClaim(data) }
                }
            );
            rows = menu;
        } 
        return rows;
    }
    ngOnDestroy() {
        if (this.subscriptionTask) {
            this.subscriptionTask.unsubscribe();
        }
    }

    get isVisibleAction() {
        return this.menuActions && Array.isArray(this.menuActions) && this.menuActions.length > 0
    }

}
