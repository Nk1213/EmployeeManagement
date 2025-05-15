import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, ClientData } from '../model/interface/role';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { Constant } from '../Constants/constants';


@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  getUsers(): Observable<APIResponse> {
    return this.http.get<APIResponse>("https://dummyjson.com/users");
  };
  getEmployeeData(): Observable<any> {
    return this.http.get<any>(environment.API_URL_Emp + Constant.API_METHOD.GET_ALL_EMP);
  }
  
  GetParticularUser(name: string): Observable<ClientData> {
    return this.http.get<ClientData>(environment.API_URL + name);
  }

  AddClientData(obj: Client): Observable<any> {
    return this.http.post(environment.API_URL, obj)
  }
  UpdateClientData(username: string, obj: Client): Observable<any> {
    return this.http.put(environment.API_URL + username, obj)
  }
  DeleteClient(username: string): Observable<any> {
    return this.http.delete(environment.API_URL + username)
  }

  ProjectData(): Observable<any> {
    return this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClientProjects");
  }


}
