import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/core/interfaces/productos.interface';
import { ProductosService } from 'src/app/core/services/productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  listadoProductos: Productos[] = [];
  estadoPeticion: boolean;

  constructor(
    private readonly productosServices: ProductosService
  ) { }

  ngOnInit(): void {
    this.consultarProductos();
  }

  consultarProductos(): void {
    this.productosServices.consultarProductos().subscribe((response: Productos[]) => {
      this.listadoProductos = response;
      this.estadoPeticion = true;
    }, error =>{
      console.log(error);
      this.estadoPeticion = false;
    })
  }

}
