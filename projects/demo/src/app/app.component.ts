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
    animate: true,
    animationParams: ".9s linear"
  }
  pbOptions3: progressBarOptions = {
    vertical: false,
    invert: true,
    animate: true
  }
  pbOptions4: progressBarOptions = {
    vertical: false,
    invert: false,
    animate: true
  }
  pbOptions5: progressBarOptions = {
    vertical: false,
    invert: false,
  }

  mProgr: number = 0;

  constructor() {
    
  }

  get progr() {
    return this.mProgr / 100 ;
  }

  ngOnInit() {
    setInterval(() => {
      this.mProgr = (this.mProgr + 10) % 100;
    }, 1000)
  }
}
