import { Component, Input, OnInit } from '@angular/core';

export interface progressBarOptions {
  vertical?: boolean;
  invert?: boolean;
  thickness?: string;
  fgColor?: string;
  bgColor?: string;
  borderRadius?: string;
  align?: "left" | "center" | "right";
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
    let _p = p*100 ;
    this.mProgress = _p > 100 ? 100 : (_p < 0 ? 0 : _p) ;
  }
  
  constructor() {
  }

  get barStyle() {
    let _base:any = {
      'background-color': this.mOptions.fgColor || "#4477ee",
      'border-radius': this.mOptions.borderRadius || "8px",
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
      'background-color': this.mOptions.bgColor || "#ddd",
      'border-radius': this.mOptions.borderRadius || "8px",
    } ;

    switch(this.mOptions.align) {
      case 'center':
        _base['margin-left'] = 'auto' ;
        _base['margin-right'] = 'auto' ;
        break ;
      case 'right':
        _base['margin-left'] = 'auto' ;
        _base['margin-right'] = '0' ;
    }

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
