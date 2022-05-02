import { Component } from '@angular/core';
import { progressBarOptions } from 'projects/ngx-easy-progress/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  pbOptions0: progressBarOptions = {
    vertical: true,
    invert: false,
    align: 'center'
  }
  pbOptions1: progressBarOptions = {
    vertical: true,
    invert: true,
    align: 'right',
    bgColor: "red"
  }
  pbOptions2: progressBarOptions = {
    vertical: true,
    invert: true,
    align: 'center',
    fgColor: "#1144ff",
    thickness: "8px",
    borderRadius: "0",
  }
  pbOptions3: progressBarOptions = {
    vertical: false,
    invert: true,
    align: 'center'
  }
  pbOptions4: progressBarOptions = {
    vertical: false,
    invert: false,
    align: 'center'
  }

  constructor() {
    
  }
}
