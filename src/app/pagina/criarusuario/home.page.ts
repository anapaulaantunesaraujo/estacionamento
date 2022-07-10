import { Component, OnInit} from '@angular/core';
import { Criarusuariots } from './criarusuariots/criarusuario';

import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CriarusuarioService } from './criarusuariosv/criarusuariosv.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  

  private criarusuario:Criarusuariots = new Criarusuariots;
  private key:string = null;

  constructor(
    private criarUsuariosService: CriarusuarioService,
    public alertController: AlertController,
    private activatedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.activatedRouter.snapshot.paramMap.get("key");
    if (this.key){
      this.criarUsuariosService.get(this.key).then(
        res=>{
        this.criarusuario = res;
        }
      )
    }
  }

 onSubmit(){
    //alteração
    if (this.key) {
      this.criarUsuariosService.update(this.key,this.criarusuario)
    }
   // alterção
    else
    this.criarUsuariosService.set(this.criarusuario)
  }

    

}


