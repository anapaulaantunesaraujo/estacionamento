import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Relatoriots } from '../relatorios/cadastrosv/relatoriots';
import { RelatoriosService } from '../relatorios/servico/relatorios.service';

@Component({
  selector: 'app-cadastrotag',
  templateUrl: './cadastrotag.page.html',
  styleUrls: ['./cadastrotag.page.scss'],
})
export class CadastrotagPage implements OnInit {
  public relatorio: Relatoriots[];

  constructor(
    private relatoriosService: RelatoriosService,
    private alertController: AlertController
  ) { }

    ngOnInit() {
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
    this.relatoriosService.getall().then (
      res=>{
      console.log(res);
      this.relatorio = res;
      }
    )
  }
  }
