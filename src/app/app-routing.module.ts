import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './feature/listado-productos/listado-productos.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ListadoProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
