import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';
import { HomeComponent } from './home/home.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { Pagina404Component } from './pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoproductosComponent,
    HomeComponent,
    ListadoclientesComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
