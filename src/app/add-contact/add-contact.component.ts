import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { MyGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  allgroups: MyGroup[] = [];
  contact: MyContact = {};
  constructor(private api: ApiService,private router:Router) {}
  ngOnInit(): void {
    this.api.getAllGroup().subscribe((data: any) => {
      this.allgroups = data;
    });
  }
  addContact() {
    console.log(this.contact);
    
    this.api.addContact(this.contact)
    .subscribe((data)=>{
      //navigate to admin page
      this.router.navigateByUrl('')
    })
  }
}
