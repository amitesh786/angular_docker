import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './tasks.component';

const routes: Routes = [
    {
        path: '',
        component: TaskComponent,
        data: {
            title: 'Tasks'
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TaskRoutingModule {}
