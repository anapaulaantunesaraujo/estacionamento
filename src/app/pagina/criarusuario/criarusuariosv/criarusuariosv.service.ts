import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Criarusuariots } from '../criarusuariots/criarusuario';

@Injectable({
  providedIn: 'root'
})
export class CriarusuarioService {

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
    public set(criarusuaio:Criarusuariots) {
      let key = Date.now().toString();
      this.storage.set(key, criarusuaio);
    }

    public getall(){
      let criarusuariots:Criarusuariots[]=[];
     return this.storage.forEach(
      (value: Criarusuariots, key: string)=>{
      let criarusuario = new Criarusuariots;
      value.uid = key;
      criarusuario = value;
      criarusuariots.push(criarusuario);
      }
     ).then(
      res=>{
        return Promise.resolve(criarusuariots);
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

    public update(key:string, criarusuario:Criarusuariots){
      //let key = relatorio.uid;
      criarusuario.uid = "";
      return this.storage.set(key, criarusuario)
    }

    public remove(key:string){
     return this.storage.remove(key)
    }
}

//public add(relatorio:Relatoriots){
  //let key = Date.now().toString();      
  //return this.storage.create();


