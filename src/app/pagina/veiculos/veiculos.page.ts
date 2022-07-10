import { Component, OnInit } from '@angular/core';
import { Cadastroveiculo } from './veiculostag/cadastroveiculo';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Carrots } from './carrosv/carrots';
import { CadastrocarroService } from './veiculoservico/cadastrocarro.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.page.html',
  styleUrls: ['./veiculos.page.scss'],
})
export class VeiculosPage implements OnInit {

  private veiculo:Carrots = new Carrots;
  private key:string = null;

  constructor(
    private cadastroCarroService: CadastrocarroService,
    public alertController: AlertController,
    private activatedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.activatedRouter.snapshot.paramMap.get("key");
    if (this.key){
      this.cadastroCarroService.get(this.key).then(
        res=>{
        this.veiculo = res;
        }
      )
    }
  }

 onSubmit(){
    //alteração
    if (this.key) {
      this.cadastroCarroService.update(this.key,this.veiculo)
    }
   // alterção
    else
    this.cadastroCarroService.set(this.veiculo)
  }

    

}