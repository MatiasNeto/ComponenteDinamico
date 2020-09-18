import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSiteComponent } from './Layout/nav-site/nav-site.component';
import { FooterSiteComponent } from './Layout/footer-site/footer-site.component';
import { GeladeiraComponent } from './Modules/Produto/geladeira/geladeira.component';
import { NotebookComponent } from './Modules/Produto/notebook/notebook.component';
import { FogaoComponent } from './Modules/Produto/fogao/fogao.component';
import { ConfiguracoesComponent } from './Modules/Configuracao/configuracoes/configuracoes.component';
import { ProdutosComponent } from './Modules/Produto/produtos.component';
import { TelevisaoComponent } from './Modules/Produto/televisao/televisao.component';
import { CelularComponent } from './Modules/Produto/celular/celular.component';
import { MaquinaLavarComponent } from './Modules/Produto/maquina-lavar/maquina-lavar.component';
import { ArCondicionadoComponent } from './Modules/Produto/ar-condicionado/ar-condicionado.component';
import { OrderListPipe } from './order-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavSiteComponent,
    FooterSiteComponent,
    GeladeiraComponent,
    NotebookComponent,
    FogaoComponent,
    ConfiguracoesComponent,
    ProdutosComponent,
    TelevisaoComponent,
    CelularComponent,
    MaquinaLavarComponent,
    ArCondicionadoComponent,
    OrderListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [ GeladeiraComponent,
    NotebookComponent,
    FogaoComponent, TelevisaoComponent,
    CelularComponent,
    MaquinaLavarComponent,
    ArCondicionadoComponent,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
