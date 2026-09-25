import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pedido {
  id: number;
  producto: string;
  estado: string;
}

@Injectable({ providedIn: 'root' })
export class PedidosService {
  // TODO: reemplaza por tu Invoke URL real de API Gateway, por ejemplo:
  // https://<API_ID>.execute-api.us-east-1.amazonaws.com/test/api/pedidos
  private readonly url = 'https://y2x6idd56.execute-api.us-east-1.amazonaws.com/test/api/pedidos';

  constructor(private http: HttpClient) {}

  obtenerPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.url);
  }
}
