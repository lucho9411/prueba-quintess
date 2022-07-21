import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interface';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private readonly http: HttpClient
  ) { }

  consultarProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(environment.apiLocal + '/data.json', {}).pipe(map((response: Productos[]) => {
      return response;
    }),
    catchError (e => {
      return throwError(e);
    }));
  }
}
