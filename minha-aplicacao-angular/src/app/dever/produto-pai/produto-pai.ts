
import { Component } from '@angular/core';
import { ProdutoFilho } from '../produto-filho/produto-filho';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-pai',
  imports: [CommonModule, ProdutoFilho],
  templateUrl: './produto-pai.html',
  styleUrl: './produto-pai.css',
})
export class ProdutoPai {
  produto = {
    nome: 'Notebook',
    preco: 3500,
  };

  mensagem = '';

  receberProdutoSelecionado(nomeProduto: string): void {
    this.mensagem = `Produto selecionado: ${nomeProduto}`;
  }
}
                