import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Relatoriots } from '../relatorios/cadastrosv/relatoriots';
import { RelatoriosService } from '../relatorios/servico/relatorios.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.page.html',
  styleUrls: ['./tag.page.scss'],
})
export class TagPage implements OnInit {

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
    //alterção
    else
    this.relatoriosService.set(this.relatorio)
  }

    

}