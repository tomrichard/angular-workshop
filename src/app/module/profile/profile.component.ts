import { Component, OnInit } from '@angular/core';
import { Mobil } from 'src/app/class/mobil';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name = "";
  age = 0;
  job = "";

  text: any;

  constructor(
    public readonly profileService: ProfileService
  ) { }

  ngOnInit(): void {

    this.profileService.name  = "Tom";
    this.profileService.age   = 17;
    this.profileService.job   = "Programmer"; 

    this.name = this.profileService.name;
    this.age  = this.profileService.age;
    this.job  = this.profileService.job;

  }

  iniFunction(event: any) {
    this.text = event;
  }

  clear() {
    this.profileService.clearProfile();
  }

}
