import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrotagPageRoutingModule } from './cadastrotag-routing.module';

import { CadastrotagPage } from './cadastrotag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrotagPageRoutingModule
  ],
  declarations: [CadastrotagPage]
})
export class CadastrotagPageModule {}
