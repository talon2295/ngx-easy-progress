import { Component, Input, OnInit } from '@angular/core';

export interface progressBarOptions {
  vertical?: boolean;
  invert?: boolean;
  mode?: "progress" | "indeterminate",
  thickness?: string;
  fgColor?: string;
  bgColor?: string;
  borderRadius?: string;
  align?: "left" | "center" | "right";
  animate?: boolean;
  animationParams?: string;
}

@Component({
  selector: 'ngx-easy-progress',
  templateUrl: './ngx-easy-progress.component.html',
  styleUrls: ['./ngx-easy-progress.component.scss'],
})
export class NgxEasyProgressComponent implements OnInit {

  private defBorderRadius:string = "8px" ;
  private detThickness:string = "20px" ;

  mProgress: number = 0 ; 
  mBuffer: number = 0 ; 

  @Input("options") mOptions: progressBarOptions = {};
  @Input("progress") set progress(p:number) {
    let _p = p*100 ;
    this.mProgress = _p > 100 ? 100 : (_p < 0 ? 0 : _p) ;
  }
  @Input("buffer") set buffer(p:number) {
    let _p = p*100 ;
    this.mBuffer = _p > 100 ? 100 : (_p < 0 ? 0 : _p) ;
  }
  
  constructor() {
  }

  get barStyle() {
    let _base:any = {
      'background-color': this.mOptions.fgColor || "#4477ee",
      'border-radius': this.mOptions.borderRadius || this.defBorderRadius,
    } ;

    if(this.mOptions.vertical) {
      _base['height'] = (this.mProgress || 0) + "%" ;
      if(this.mOptions.animate) {
        _base['transition'] = "height " + (this.mOptions.animationParams || ".3s ease" );
      }
    }
    else {
      _base['width'] = (this.mProgress || 0) + "%" ;
      if(this.mOptions.animate) {
        _base['transition'] = "width " + (this.mOptions.animationParams || ".3s ease" );
      }
    }

    return _base ;
  }

  get bufStyle() {
    return {};
  }

  get outerStyle() {
    let _base:any = {
      'background-color': this.mOptions.bgColor || "#ddd",
      'border-radius': this.mOptions.borderRadius || this.defBorderRadius,
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
      _base['width'] = this.mOptions.thickness || this.detThickness ;
    }
    else {
      _base['height'] = this.mOptions.thickness || this.detThickness ;
    }
    
    return _base ;
  }

  ngOnInit():void {}
}
