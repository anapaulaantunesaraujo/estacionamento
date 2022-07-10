import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Relatoriots } from './cadastrosv/relatoriots';
import { RelatoriosService } from './servico/relatorios.service';


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.page.html',
  styleUrls: ['./relatorios.page.scss'],
})
export class RelatoriosPage implements OnInit {

  private relatorio:Relatoriots = new Relatoriots;
  private key:string = null;

  constructor(
    private relatoriosService: RelatoriosService,
    public alertController: AlertController,
    private activatedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.activatedRouter.snapshot.paramMap.get("key");
    if (this.key){
      this.relatoriosService.get(this.key).then(
        res=>{
        this.relatorio = res;
        }
      )
    }
  }

 onSubmit(){
    //alteração
    if (this.key) {
      this.relatoriosService.update(this.key,this.relatorio)
    }
   // alterção
    else
    this.relatoriosService.set(this.relatorio)
  }

    

}
