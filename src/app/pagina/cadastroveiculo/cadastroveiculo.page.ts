import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cadastroveiculo } from '../veiculos/veiculostag/cadastroveiculo';
import { CadastrocarroService } from '../veiculos/veiculoservico/cadastrocarro.service';

@Component({
  selector: 'app-cadastroveiculo',
  templateUrl: './cadastroveiculo.page.html',
  styleUrls: ['./cadastroveiculo.page.scss'],
})
export class CadastroveiculoPage implements OnInit {

  public veiculo: Cadastroveiculo[];

  constructor(
    private veiculosService: CadastrocarroService,
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
        this.veiculosService.remove(key).then(
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
 return this.veiculosService.getall().then (
    res=>{
    console.log(res);
    this.veiculo = res;
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
