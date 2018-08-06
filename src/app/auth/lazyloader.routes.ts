import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import { CanActivateTeam } from '../guarded-routes/guarded-routes.router'
import { CanActivate } from '@angular/router';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
        { path: 'material-widgets', loadChildren: '../material-widgets/material-widgets.module#MaterialWidgetsModule', canActivate:[CanActivateTeam] },
        { path: 'tables', loadChildren: '../tables/tables.module#TablesModule', canActivate:[CanActivateTeam] },
        { path: 'maps', loadChildren: '../maps/maps.module#MapsModule', canActivate:[CanActivateTeam] },
        { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' , canActivate:[CanActivateTeam]},
        // { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
        //{ path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
        { path: 'pages', loadChildren: '../pages/pages.module#PagesModule' },
        { path: 'forms', loadChildren: '../forms/forms.module#FormModule' , canActivate:[CanActivateTeam]}, //fix this
        { path: 'guarded-routes', loadChildren: '../guarded-routes/guarded-routes.module#GuardedRoutesModule' , canActivate:[CanActivateTeam]},
        // { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' }, 
        { path: 'scrumboard', loadChildren: '../scrumboard/scrumboard.module#ScrumboardModule' , canActivate:[CanActivateTeam]},
        { path: 'classes', loadChildren: '../classes/classes.module#ClassesModule', canActivate:[CanActivateTeam] },
        { path: 'students', loadChildren: '../students/students.module#StudentsModule', canActivate:[CanActivateTeam] },
        { path: 'teachers', loadChildren: '../teachers/teachers.module#TeachersModule', canActivate:[CanActivateTeam] },
    ]
}];
