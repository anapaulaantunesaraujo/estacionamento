import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'INÍCIO', url: '/home', icon: 'home' },
    { title: 'VEICULOS', url: '/cadastroveiculo', icon: 'car' },
    { title: 'CADASTRO', url: '/cadastro', icon: 'document' },
    { title: 'SOBRE', url: '/sobre', icon: 'book' },
    { title: 'TAG', url: '/cadastrotag', icon: 'clipboard' },
    { title: 'SAIR', url: '/sair', icon: 'exit' },
    
  ];
  
  constructor() {}
}
