import { Client } from "../class/client"

export interface IRole
{
    id: number,
    title: string,
    description:string
}
export interface IUsers
{
    id:number,
    firstName:string,
    lastName:string
}

export interface ClientData{
    id: number
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    userStatus: number
}
export interface APIResponse
{
    users:any
}
export interface ProjectData {
    empName: string
    empId: number
    empCode: string
    empEmailId: string
    empDesignation: string
    projectName: string
    startDate: string
    expectedEndDate: string
    clientName: string
    clientProjectId: number
  }
  

