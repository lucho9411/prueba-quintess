import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoProductosComponent } from './feature/listado-productos/listado-productos.component';
import { ProductosActivosComponent } from './feature/components/productos-activos/productos-activos.component';
import { ProductosBloqueadosComponent } from './feature/components/productos-bloqueados/productos-bloqueados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoProductosComponent,
    ProductosActivosComponent,
    ProductosBloqueadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
