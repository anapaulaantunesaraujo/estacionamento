import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})


export class FolderPage implements OnInit {

  private usuario:string;
  private password:string;

  constructor(public toastController: ToastController, public nav:NavController) { }


  login(x){
    if(this.usuario === 'admin@ionic.com' && this.password === 'admin'){
      this.nav.navigateForward(x);
      this.presentToast('Seja Bem-vindo!', 'success');
    }else {
      this.presentToast('ERRO, Usuario e/ou senha invalidos', 'danger');
    }
  }

  async presentToast( texto: string, cor:string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor ,
      duration: 2000,
    })
    toast.present();
  }

  abrirPagina(x){
    this.nav.navigateForward(x)
  }
  ngOnInit() {
  }

}
