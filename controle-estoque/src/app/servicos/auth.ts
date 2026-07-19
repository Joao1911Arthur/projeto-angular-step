import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiUrl: string = 'https://projeto-nodejs-step-joao-arthur.vercel.app';
  
  constructor(private http: HttpClient) { }

  registrar(usuario: any) {
    return this.http.post(`${this.apiUrl}/register`, usuario );
  }
  
  login(usuario: any) {
    return this.http.post(`${this.apiUrl}/login`, usuario);
  }

  pegarPerfilAcesso(token: any) {
    const headerComToken = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(`${this.apiUrl}/perfil`, { headers: headerComToken });
  }

  verificarUsuario(token: any) {
    const headerComToken = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(`${this.apiUrl}/me`, { headers: headerComToken });
  }
}
