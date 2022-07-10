import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroveiculoPageRoutingModule } from './cadastroveiculo-routing.module';

import { CadastroveiculoPage } from './cadastroveiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroveiculoPageRoutingModule
  ],
  declarations: [CadastroveiculoPage]
})
export class CadastroveiculoPageModule {}
