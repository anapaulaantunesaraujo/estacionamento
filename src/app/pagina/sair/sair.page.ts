import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.page.html',
  styleUrls: ['./sair.page.scss'],
})
export class SairPage implements OnInit {

  constructor(public nav:NavController) { }
  abrirPagina(x){
    this.nav.navigateForward(x)
  }
  ngOnInit() {
  }

}
