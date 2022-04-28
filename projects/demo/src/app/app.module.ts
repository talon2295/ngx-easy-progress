import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEasyProgressModule } from 'projects/ngx-easy-progress/src/public-api';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEasyProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
