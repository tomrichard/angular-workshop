import { Component } from '@angular/core';
import { Kendaraan } from './class/kendaraan';
import { Mobil } from './class/mobil';
import { Motor } from './class/motor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-app-tom';

  constructor() {
  }

}
