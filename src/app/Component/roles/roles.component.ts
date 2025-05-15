import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { APIResponse, IRole, IUsers } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { ApiservicesService } from '../../services/apiservices.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  userList: IUsers[] = [];
  isLoader: boolean = true;
  

  testdata = [
    { name: 'Alice', email: 'alice@example.com', age: 25 },
    { name: 'Bob', email: 'bob@example.com', age: 30 },
    { name: 'Charlie', email: 'charlie@example.com', age: 28 },
  ];

  //http=Inject(HttpClient);
  constructor(private http: HttpClient, private apiservice: ApiservicesService) { }

  ngOnInit(): void {
    
    this.getAllRoles();
    this.getUsers2();
  }
  getUsers2(): void {

    this.apiservice.getUsers().subscribe((result: APIResponse) => {
      this.userList = result.users;
    }, error => {
      alert("Api Error")
      this.isLoader = false;
    })
    this.isLoader = false;
  }
  getAllRoles() {
    this.http.get("https://dummyjson.com/products").subscribe((res: any) => {
      this.roleList = res.products;
    }
    )
  }




  //   firstName:string="naveen"
  //   angularVersion="version 19"
  //   version:number=19
  //   isActive :boolean=true
  //   todayDate:Date=new Date();

  //   inputType: string ="checkbox";
  // selectedState: string='';

  // showWelcome()
  // {
  //   alert("Welcome");

  // }
  // showMessage(message: string)
  // {
  //   alert(message);

  // }


}
