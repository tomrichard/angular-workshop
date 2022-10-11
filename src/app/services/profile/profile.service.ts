import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  name: string = "";
  age: number = 0;
  job: string = "";

  constructor() { }

  clearProfile() {
    this.name = "";
    this.age  = 8;
    this.job  = "";
  }

}
