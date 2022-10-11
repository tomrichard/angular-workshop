import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss']
})
export class TextinputComponent implements OnInit {

  @Input() isPassword: boolean = false; 

  @Output() iniEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  iniFungsiTampungValue(event: any) {
    this.iniEvent.emit(event.target.value);
  }

}
