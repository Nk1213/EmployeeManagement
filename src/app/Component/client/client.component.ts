import { Component, OnInit, signal } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ApiservicesService } from '../../services/apiservices.service';
import { APIResponse, ClientData, ProjectData } from '../../model/interface/role';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertComponent } from '../../ReusableComp/alert/alert.component';
import { MyButtonComponent } from '../../ReusableComp/my-button/my-button.component';

@Component({
  selector: 'app-client',
  imports: [FormsModule, CommonModule, UpperCasePipe,AlertComponent,MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();
  clientList: Client[] = [];
  isDisabled: boolean = false;
  currentDate: Date = new Date();

  fName= signal("Rahul");
  projectList= signal<ProjectData[]>([]);

  constructor(private clientService: ApiservicesService) { }
  userList$: Observable<any> = new Observable<any>;

  ngOnInit(): void {
    this.getEmployees();
    //this.ClientData('hjuu');
    this.ProjectsData();    
    debugger;
    this.userList$ = this.clientService.getAllUser();
  }
  ChangeName()
  {
    this.fName.set("Raj");
  }
  getEmployees() {
    this.clientService.getEmployeeData().subscribe(res => {
      console.log(res);
    })
  }

  ClientData(usernamed: string) {
    this.clientList = [];
    debugger;
    this.clientService.GetParticularUser(usernamed).subscribe((res: ClientData) => {
      this.clientList.push(res);
    })
  }
  ProjectsData() {
    this.clientService.ProjectData().subscribe(res => {
       this.projectList.set(res.data);
       debugger;
    })
  }


  AddClient(): any {
    this.clientService.AddClientData(this.clientObj).subscribe(
      {
        next: () => {
          alert('client saved successfully');
          this.ResetClient();
          //this.ClientData(this.clientObj.username);
        },
        error: (err: HttpErrorResponse) =>
          console.error("Error Occured", err.message),

        complete: () => {
          alert("Completed")
        }
      }
    );
  }

  UpdateClient(username: string) {
    debugger;
    this.clientService.UpdateClientData(username, this.clientObj).subscribe(
      {
        next: () => {
          alert('client updated successfully');
          this.ResetClient();
        },
        error: (err: HttpErrorResponse) =>
          console.error("Error Occured", err.message),
        complete: () => {
          alert("Update Complete")
        }
      }
    );

  }
  EditClient(obj: Client) {
    this.clientObj = obj;
    this.isDisabled = true;
  }
  ResetClient() {
    this.clientObj = new Client();
    this.isDisabled = false;
  }
  DeleteClient(username: string) {
    if (confirm("Are you sure")) {
      this.clientService.DeleteClient(username).subscribe(
        {
          next: () => {
            alert('client delete successfully');
            this.ResetClient();
          },
          error: (err: HttpErrorResponse) =>
            console.error("Error Occured", err.message),

          complete: () => {
            alert("Delete Complete")
          }
        }
      );
    }
    else {

    }

  }
}
