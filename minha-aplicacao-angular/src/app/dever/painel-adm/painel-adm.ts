import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Usuario } from '../services/usuario';


interface Pessoas {
  id: number;
  email: string;
  name: {
    firstname: string;
    lastname: string;
  };
}

@Component({
  selector: 'app-painel-adm',
  imports: [CommonModule],
  templateUrl: './painel-adm.html',
  styleUrls: ['./painel-adm.css'],
})

export class PainelAdm implements OnInit {

  usuarios = signal<Pessoas[]>([]);


  constructor(private usuarioService: Usuario) { }

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe({
      next: (dados: Pessoas[]) => {
        this.usuarios.set(dados);
        console.log(this.usuarios());
      },
      error: (erro: any) => {
        console.error(erro);
      },
    });
  }
}
