import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{
  contactId:string=''
  contact:any=''
  group:any=''
  groupname:any=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((data:any)=>{
     this.contactId=data.contactId
     console.log(this.contactId);
      
    })

    //api call
    this.api.viewContact(this.contactId).subscribe((data:any)=>{
      this.contact=data
      this.group=data.groupId
      console.log(this.group);
          //api call for group

      this.api.getGroup(this.group).subscribe((data:any)=>{
        console.log(data);
        
        this.groupname=data
      })
    })
  
  }

}
