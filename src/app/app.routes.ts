import { Routes } from '@angular/router';
import { MasterComponent } from './Component/master/master.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { ClientComponent } from './Component/client/client.component';
import { LoginComponent } from './Component/login/login.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate:[authGuard],
        children: [
            {
                path: 'client',
                component: ClientComponent,
                
            },
            {
                path: 'employee',
                component: EmployeeComponent
            },
            {
                path: 'master',
                component: MasterComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }


];
