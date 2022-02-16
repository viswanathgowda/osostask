import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contactbook',
  templateUrl: './contactbook.component.html',
  styleUrls: ['./contactbook.component.css']
})
export class ContactbookComponent implements OnInit {
  // contactDetails: any[];
  constructor() {
    // this.contactDetails= [
    //   {name:"vishwa",phoneNumber:"6300358142"} , {name:"Kiran",phoneNumber:"6387358142"} 
    //  ];
   }

@Input() contactDetails: any;
@Output() clearData = new EventEmitter();
@Output() editData = new EventEmitter();
@Output() deleteData = new EventEmitter();
  ngOnInit(): void { debugger
    // this.contactDetails.push(this.registreddetails);
  }

  edit(e: any) {
 this.editData.emit(e);
  }

  delete(e: any) {
  this.deleteData.emit(e);
  }
  clearDataMethod() {
    this.clearData.emit();
  }
 }
