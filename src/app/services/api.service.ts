import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string='http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }

  //function for get all contacts
  getAllContacts():Observable<MyContact>{
   return this.http.get(this.baseUrl)
  }

  //function for get particular contact
  viewContact(contactId:string){
    return this.http.get(`${this.baseUrl}/${contactId}`)
  }
  //fetching groups with id
  getGroup(groupId:string){
    return this.http.get(`http://localhost:3000/groups/${groupId}`)
  }
  //fetching all groups
  getAllGroup(){
    return this.http.get(`http://localhost:3000/groups`)
  }
  //for adding contact
  addContact(contactBody:any){
    return this.http.post(this.baseUrl,contactBody)
  }
  //function for deleting a contact
  deleteContact(contactId:any){
   return this.http.delete(`${this.baseUrl}/${contactId}`)
  }
}
