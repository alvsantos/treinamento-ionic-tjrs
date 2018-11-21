import { Component, ViewChild } from "@angular/core";
import { Nav, NavController, NavParams } from "ionic-angular";
import { EstoquePage } from "../estoque/estoque";
import { ProdutosPage } from "../produtos/produtos";
import { ComprasPage } from "../compras/compras";
import { VendasPage } from "../vendas/vendas";
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = EstoquePage;
  pages: any[];
  constructor(public navCtrl: NavController,     public navParams: NavParams) {
    this.pages = [
      { title: 'Estoque', component: HomePage },
      { title: 'Produtos', component: ProdutosPage },
      { title: 'Compras', component: ComprasPage },
      { title: 'Vendas', component: VendasPage }
    ];
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
  sair() {
    this.nav.setRoot(LoginPage);
  }
}
