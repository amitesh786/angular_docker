import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskSummary } from '../../models';

import { TaskRestService } from '../../services/task-rest.service';
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

    // Instance for process and container
    taskSummary: TaskSummary[];
    menuActions: MenuItem[];

    totalRecords: Number = 0;
    params: [];
    
    constructor(
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

        // Get list from service
        this.getTaskList();
    }

    getTaskList() {
        this.taskSummary = this.taskRestService.getTaskData();

        if (this.taskSummary && this.taskSummary.length > 0) {
            this.loading = false;
            this.totalRecords = this.taskSummary.length;
        }
    }
    

    getMenuItemsForItem(data: TaskSummary): MenuItem[] {

        let menu = [];        
        menu = [].concat(
                {   
                    id: "1",
                    label: 'Open',
                    icon: 'fa fa-wrench',
                    // command: e => { this.fnTaskClaim(data) }
                }
            );
        return menu;
    }

    ngOnDestroy() {
    }

    get isVisibleAction() {
        return this.menuActions && Array.isArray(this.menuActions) && this.menuActions.length > 0
    }

}
