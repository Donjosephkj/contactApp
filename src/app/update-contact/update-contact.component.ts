import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { MyGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent implements OnInit {
  contactId: any = '';
  contact: MyContact = {} as MyContact  
  groups:any=[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.contactId = data['contactId'];
    });
    this.api.viewContact(this.contactId).subscribe((data) => {
      this.contact = data;

     
    });
    this.api.getAllGroup().subscribe((data) => {
      this.groups = data;
    });
  }
  updateContact(){
    this.api.updateContact(this.contactId,this.contact)
    .subscribe((data:any)=>{
      this.router.navigateByUrl('')
    })
  }
}
