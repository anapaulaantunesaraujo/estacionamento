import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroveiculoPage } from './cadastroveiculo.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroveiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroveiculoPageRoutingModule {}
