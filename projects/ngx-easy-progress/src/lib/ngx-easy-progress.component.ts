import { Component, Input, OnInit } from '@angular/core';

export interface progressBarOptions {
  vertical?: boolean;
  invert?: boolean;
  thickness?: string;
  fgColor?: string;
  bgColor?: string;
}

@Component({
  selector: 'ngx-easy-progress',
  templateUrl: './ngx-easy-progress.component.html',
  styleUrls: ['./ngx-easy-progress.component.scss'],
})
export class NgxEasyProgressComponent implements OnInit {

  mProgress: number = 0 ; 

  @Input("options") mOptions: progressBarOptions = {};
  @Input("progress") set progress(p:number) {
    this.mProgress = p*100 ;
  }
  
  constructor() {
  }

  get barStyle() {
    let _base:any = {
      'background-color': this.mOptions.fgColor || "#4477ee"
    } ;

    if(this.mOptions.vertical) {
      _base['height'] = (this.mProgress || 0) + "%" ;
    }
    else {
      _base['width'] = (this.mProgress || 0) + "%" ;
    }

    return _base ;
  }

  get outerStyle() {
    let _base:any = {
      'background-color': this.mOptions.bgColor || "#ddd"
    } ;

    if(this.mOptions.vertical) {
      _base['width'] = this.mOptions.thickness || "20px" ;
    }
    else {
      _base['height'] = this.mOptions.thickness || "20px" ;
    }
    
    return _base ;
  }

  ngOnInit():void {}
}
