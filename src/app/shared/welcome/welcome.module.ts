import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    
  ],
  exports:[
    WelcomeComponent
  ]
})
export class WelcomeModule { }
