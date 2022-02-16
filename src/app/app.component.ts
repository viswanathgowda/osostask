import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'osostask';
  registration!: FormGroup;
  registreddata: any[] = [];
  constructor(private _myFb: FormBuilder) {
    this.registration = this._myFb.group({
      id: [0],
      name: ['' , [Validators.required]],
      phoneNumber: ['' , [Validators.required ,  Validators.minLength(10), Validators.maxLength(10)]]
    });
  }
  date = new Date();
  addcontact(){
    if(this.registration.value.id === 0 || this.registration.value.id === null) {
    this.registration.patchValue({
      id: this.id(),
    })
    this.registreddata.push(this.registration.value);
  } else {
    this.registreddata.filter(i => i.id === this.registration.value.id)[0].name = this.registration.value.name;
    this.registreddata.filter(i => i.id === this.registration.value.id)[0].phoneNumber = this.registration.value.phoneNumber;
  }
    this.registration.reset();
  }
  clearAllContacts() {
    this.registreddata = [];
  }
  editContact(e : any){
  this.registration.setValue(e);
  }
  deleteContact(e: any) {
   this.registreddata = this.registreddata.filter(i => i.id !== e.id);
  }

  id() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
}
