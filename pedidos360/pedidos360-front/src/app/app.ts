import { Component } from "@angular/core";
import { SignInWithRedirectInput, signOut, fetchAuthSession, getCurrentUser, signInWithRedirect } from "aws-amplify/auth";
import { Pedido, PedidosService } from "./pedidos.service";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  usuario = '';
  token = '';
  autenticado = false;

  pedidos: any[] = [];
  cargandoPedidos = false;
  errorPedidos = '';

  constructor(private pedidosService: PedidosService) {}

  async login (){
    await signInWithRedirect();
  }

  async logout(){
    await signOut();
  }
  async verSesion(){
    try{
      const user = await getCurrentUser();
      const session =  await fetchAuthSession();
      this.usuario = user.username; 
      this.token = session.tokens?.accessToken?.toString()??'';
      this.autenticado = true;
      console.log("usuario: ", user);
      console.log("access token: ", session.tokens?.accessToken?.toString())
    }
    catch(error){
      console.log("No existe sesion", error)
      this.autenticado = false;
    }
  }

  consultarPedidos() {
    this.cargandoPedidos = true;
    this.errorPedidos = '';
    this.pedidosService.obtenerPedidos().subscribe({
      next: (data) => {
        this.pedidos = data;
        this.cargandoPedidos = false;
      },
      error: (error) => {
        console.error(error);
        this.errorPedidos = 'No fue posible consultar pedidos';
        this.cargandoPedidos = false;
      },
    });
  }
}