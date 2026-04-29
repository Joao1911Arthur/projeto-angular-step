import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../services/usuario';


interface Pessoas {
  nome: string;
  id: number;
}

@Component({
  selector: 'app-painel-adm',
  imports: [CommonModule],
  templateUrl: './painel-adm.html',
  styleUrls: ['./painel-adm.css'],
})

export class PainelAdm implements OnInit {

  usuarios : any = signal([]);

  constructor(private usuarioService: Usuario) {}

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe({
      next: (dados: Usuario[]) => {
        this.usuarios.set(dados);
        console.log(this.usuarios());
      },
      error: (erro: any) => {
        console.error(erro);
      },
    });
  }
}
