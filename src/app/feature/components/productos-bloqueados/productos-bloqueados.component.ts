import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/core/interfaces/productos.interface';
import { ProductosService } from 'src/app/core/services/productos.service';

@Component({
  selector: 'app-productos-bloqueados',
  templateUrl: './productos-bloqueados.component.html',
  styleUrls: ['./productos-bloqueados.component.css']
})
export class ProductosBloqueadosComponent implements OnInit {

  listadoProductos: Productos[] = [];

  constructor(
    private readonly productosServices: ProductosService
  ) { }

  ngOnInit(): void {
    this.consultarProductos();
  }

  consultarProductos(): void {
    this.productosServices.consultarProductos().subscribe((response: Productos[]) => {
      this.listadoProductos = response.filter(option => option.estado.toLowerCase() === 'Bloqueado'.toLowerCase());
    }, error =>{
      console.log(error);
    })
  }

}
