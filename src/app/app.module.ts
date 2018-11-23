import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CompraPage } from '../pages/compra/compra';
import { ComprasPage } from '../pages/compras/compras';
import { EstoquePage } from '../pages/estoque/estoque';
import { ProdutoPage } from '../pages/produto/produto';
import { ProdutosPage } from '../pages/produtos/produtos';
import { VendaPage } from '../pages/venda/venda';
import { VendasPage } from '../pages/vendas/vendas';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from '../services/ProdutoService';
import { DatabaseService } from '../services/DatabaseService';
import { SQLite } from '@ionic-native/sqlite';
import { SQLiteMock } from '../services/SQLiteMock';
import { Firebase } from '@ionic-native/firebase';
import { FcmProvider } from '../providers/fcm';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CompraPage,
    ComprasPage,
    EstoquePage,
    ProdutoPage,
    ProdutosPage,
    VendaPage,
    VendasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomePage,
    LoginPage,
    CompraPage,
    ComprasPage,
    EstoquePage,
    ProdutoPage,
    ProdutosPage,
    VendaPage,
    VendasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutoService,
    DatabaseService,
    { provide: SQLite, useClass: SQLiteMock },
    Firebase,
    FcmProvider

  ]
})
export class AppModule {}
