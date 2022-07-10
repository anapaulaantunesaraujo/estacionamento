import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Carrots } from '../carrosv/carrots';

@Injectable({
  providedIn: 'root'
})
export class CadastrocarroService {

  
  constructor(private storage: Storage) {
    this.init();
  }
   
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(veiculo:Carrots) {
    let key = Date.now().toString();
    this.storage.set(key, veiculo);
  }

  public getall(){
    let carrots:Carrots[]=[];
   return this.storage.forEach(
    (value: Carrots, key: string)=>{
    let veiculo = new Carrots;
    value.uid = key;
    veiculo = value;
    carrots.push(veiculo);
    }
   ).then(
    res=>{
      return Promise.resolve(carrots);
    }
   ).catch(
    err=>{
      return Promise.reject(err);
    }
   )
  }

  public get(key){
    return this.storage.get(key)
  }

  public update(key:string, veiculo:Carrots){
    //let key = relatorio.uid;
    veiculo.uid = "";
    return this.storage.set(key, veiculo)
  }

  public remove(key:string){
   return this.storage.remove(key)
  }
}

//public add(relatorio:Relatoriots){
//let key = Date.now().toString();      
//return this.storage.create();