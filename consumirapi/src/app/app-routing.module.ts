import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  // Para redirigir a una página si no hay ruta
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'listadoproductos', component:ListadoproductosComponent},

  // Ruta para errores
  {path:'**', component:Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
