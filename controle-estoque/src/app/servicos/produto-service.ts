import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

apiUrl: string = 'https://projeto-nodejs-step-joao-arthur.vercel.app/produtos';

  constructor(private http: HttpClient) {}

  getProdutos() {
    return this.http.get(this.apiUrl);
  }

}
