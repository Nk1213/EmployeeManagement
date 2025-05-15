import { Component } from '@angular/core';
import { AlertComponent } from '../../ReusableComp/alert/alert.component';

@Component({
  selector: 'app-employee',
  imports: [AlertComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {}
