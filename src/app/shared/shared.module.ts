import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { WelcomeModule } from './welcome/welcome.module';
import { ModalModule } from './modal/modal.module';


@NgModule({
  declarations: [
  ],
  imports: [
    NzInputModule,
    CommonModule,
    NzTableModule,
    NzPaginationModule,
    NzIconModule,
    NzModalModule,
    WelcomeModule,
    ModalModule,
  ],
  exports:[
    NzInputModule,
    CommonModule,
    NzTableModule,
    NzPaginationModule,
    NzIconModule,
    NzModalModule,
    WelcomeModule,
    ModalModule
  ]
})
export class SharedModule { 

}
