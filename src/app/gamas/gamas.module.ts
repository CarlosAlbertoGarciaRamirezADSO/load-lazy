import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamasRoutingModule } from './gamas-routing.module';
import { GamasComponent } from './gamas.component';
import { GamaIndividualComponent } from './gama-individual/gama-individual.component';


@NgModule({
  declarations: [
    GamasComponent,
    GamaIndividualComponent
  ],
  imports: [
    CommonModule,
    GamasRoutingModule
  ]
})
export class GamasModule { }
