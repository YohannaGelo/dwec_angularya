import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoproductosComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
