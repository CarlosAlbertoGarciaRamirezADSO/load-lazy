import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamasComponent } from './gamas.component';
import { GamaIndividualComponent } from './gama-individual/gama-individual.component';

const routes: Routes = [
  { path: '', component: GamasComponent },
  { path: 'individual', component: GamaIndividualComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamasRoutingModule { }
