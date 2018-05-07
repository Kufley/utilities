import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MonthComponent }       from './month/month.component';

const routes: Routes = [
    { path: 'year', component: DashboardComponent },
    { path: 'month', component: MonthComponent },
    { path: '', redirectTo: '/year', pathMatch: 'full' },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
