import { Injectable } from '@angular/core';
import { StorageConfigToken,Storage } from '@ionic/storage-angular';
import { Relatoriots } from '../cadastrosv/relatoriots';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

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
    public set(relatorio:Relatoriots) {
      let key = Date.now().toString();
      this.storage.set(key, relatorio);
    }

    public getall(){
      let relatoriots:Relatoriots[]=[];
     return this.storage.forEach(
      (value: Relatoriots, key: string)=>{
      let relatorio = new Relatoriots;
      value.uid = key;
      relatorio = value;
      relatoriots.push(relatorio);
      }
     ).then(
      res=>{
        return Promise.resolve(relatoriots);
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

    public update(key:string, relatorio:Relatoriots){
      //let key = relatorio.uid;
      relatorio.uid = "";
      return this.storage.set(key, relatorio)
    }

    public remove(key:string){
     return this.storage.remove(key)
    }

    public login(email:string, senha:string){
      
    }
}

//public add(relatorio:Relatoriots){
  //let key = Date.now().toString();      
  //return this.storage.create();

