import { Component, OnInit, Signal, signal, ChangeDetectionStrategy } from '@angular/core';
import { ProdutoService } from '../../servicos/produto-service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  produtos = signal<Product[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.produtoService.getProdutos().subscribe((data) => {
      this.produtos.set(data as Product[]);
      this.loading.set(false);
    });
  }

}
