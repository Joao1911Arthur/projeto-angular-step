import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiUrl: string = 'https://projeto-node-step-git-main-fabios-projects-d2648344.vercel.app/api/auth';
  apiKey: string = 'Step@2025';
  headers = new HttpHeaders({
    'x-api-key': this.apiKey,
  });
  constructor(private http: HttpClient) { }

  registrar(usuario: any) {
    return this.http.post(`${this.apiUrl}/register`, usuario, { headers: this.headers });
  }
  
  login(usuario: any) {
    return this.http.post(`${this.apiUrl}/login`, usuario, { headers: this.headers });
  }

  pegarPerfilAcesso(token: any) {
    const headerComToken = new HttpHeaders({
      'x-api-key': this.apiKey,
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(`${this.apiUrl}/perfil`, { headers: headerComToken });
  }

  verificarUsuario(token: any) {
    const headerComToken = new HttpHeaders({
      'x-api-key': this.apiKey,
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(`${this.apiUrl}/me`, { headers: headerComToken });
  }
}
