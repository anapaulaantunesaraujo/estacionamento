import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Relatoriots } from '../relatorios/cadastrosv/relatoriots';
import { RelatoriosService } from '../relatorios/servico/relatorios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public relatorio: Relatoriots[];

  constructor(
    private relatoriosService: RelatoriosService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    
    this.atualizarLista()
  }

  async remove(key) {
    
    const alert = await this.alertController.create({
      header: 'Confirmar Remoção!',
      message: 'Deseja Apagar o usuario?',
      buttons: [
        {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'danger',
      handler: (blah) =>{
        console.log('Confirm Cancel: blah');
      }
    },{
      text: 'Confirmar',
      cssClass: 'success',
      handler: () => {
        this.relatoriosService.remove(key).then(
          ()=>{
            this.atualizarLista();
          }
        )
        
      }
    
    }
  ]

      
  });

    await alert.present();
}
 
atualizarLista(){
 return this.relatoriosService.getall().then (
    res=>{
    console.log(res);
    this.relatorio = res;
    }
  )
}
doRefresh(event) {
  this.atualizarLista().then(
   ()=>{
     setTimeout(() => {
       console.log('Async operation has ended');
       event.target.complete();
     }, 2000);
   }
 )
}
}

