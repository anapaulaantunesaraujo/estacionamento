import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrotagPage } from './cadastrotag.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrotagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrotagPageRoutingModule {}
