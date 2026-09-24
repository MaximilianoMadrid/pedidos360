import { Component } from "@angular/core";
import { SignInWithRedirectInput, signOut, fetchAuthSession, getCurrentUser, signInWithRedirect } from "aws-amplify/auth";

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  usuario = '';
  token = '';
  autenticado = false;

  async login (){
    await signInWithRedirect()
  }

  async logout(){
    await signOut()
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
}