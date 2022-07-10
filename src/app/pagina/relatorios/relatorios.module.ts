import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicStorageModule } from '@ionic/storage-angular';

import { IonicModule } from '@ionic/angular';

import { RelatoriosPageRoutingModule } from './relatorios-routing.module';

import { RelatoriosPage } from './relatorios.page';
import { Drivers } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatoriosPageRoutingModule, IonicStorageModule.forRoot( 
      {
        name: '__mydb1',
        driverOrder: [ Drivers.IndexedDB, Drivers.LocalStorage]
      }
    )
  ],
  declarations: [RelatoriosPage]
})
export class RelatoriosPageModule {}
