import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModalRoutingModule,

  ]
})
export class ModalModule { }
