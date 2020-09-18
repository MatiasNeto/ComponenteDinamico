import { Component, OnInit } from '@angular/core';
import sortBy from 'sort-by';
import { ArCondicionadoComponent } from './ar-condicionado/ar-condicionado.component';
import { FogaoComponent } from './fogao/fogao.component';
import { GeladeiraComponent } from './geladeira/geladeira.component';
import { MaquinaLavarComponent } from './maquina-lavar/maquina-lavar.component';
import { NotebookComponent } from './notebook/notebook.component';
import { TelevisaoComponent } from './televisao/televisao.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  constructor() { }

  ordemProdutos = [
    {produto: 'fogao' , posicao: 3, componente: FogaoComponent},
    {produto: 'geladeira' , posicao: 5 , componente: GeladeiraComponent},
    {produto: 'notebook' , posicao: 1 , componente: NotebookComponent},
    {produto: 'ar-condicionado' , posicao: 4, componente: ArCondicionadoComponent},
    {produto: 'televisao' , posicao: 2, componente: TelevisaoComponent},
    {produto: 'maquina-lavar' , posicao: 6, componente: MaquinaLavarComponent}
  ];
  
  ngOnInit() {
    this.ordemProdutos.sort(sortBy('posicao'));
  }
}
