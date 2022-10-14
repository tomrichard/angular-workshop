import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sederhana',
  templateUrl: './sederhana.component.html',
  styleUrls: ['./sederhana.component.scss']
})
export class SederhanaComponent implements OnInit {

  displayName: any;

  formGroupSederana = new FormGroup({
    name: new FormControl(""),
    nickname: new FormControl(""),
    job: new FormControl(""),
    balance: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(20)])
  });

  constructor() { 
    this.formGroupSederana.controls["name"].setValue("Tom Ricard");
    this.formGroupSederana.get("nickname")?.setValue("Tom");

    this.displayName = this.formGroupSederana.controls["name"].value;
  }

  ngOnInit(): void {
    alert('ok');
  }

  submitButtonClick() {
    this.displayName = this.formGroupSederana.controls["name"].value;
  }

  checkValidation() {
    
    alert(this.formGroupSederana.controls["email"].valid);

  }

}
