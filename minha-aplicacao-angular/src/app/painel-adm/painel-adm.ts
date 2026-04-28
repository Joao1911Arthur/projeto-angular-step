import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Pessoas {
  nome: string;
  id: number;
  salario:number;
}

@Component({
  selector: 'app-painel-adm',
  imports: [CommonModule, FormsModule],
  templateUrl: './painel-adm.html',
  styleUrls: ['./painel-adm.css'],
})

export class PainelAdm {
  users: Pessoas[] = [
    { nome: 'João', id: 1, salario: 10000 },
    { nome: 'Maria', id: 2, salario: 5000 },
    { nome: 'Pedro', id: 3, salario: 3000 },
    { nome: 'Ana', id: 4, salario: 7000 },
    { nome: 'Carlos', id: 5, salario: 2000 },
  ];
}
