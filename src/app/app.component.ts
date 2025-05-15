import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './Component/roles/roles.component';
import { MasterComponent } from './Component/master/master.component';
import { BootstraplearnComponent } from './Component/BootStrap_Design/bootstraplearn/bootstraplearn.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MasterComponent,RolesComponent,BootstraplearnComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeManagementPrj';
}
