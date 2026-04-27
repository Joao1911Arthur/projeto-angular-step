import { Component } from '@angular/core';

interface Pessoas {
  nome: string;
  id: number;
}

@Component({
  selector: 'app-painel-adm',
  imports: [],
  templateUrl: './painel-adm.html',
  styleUrls: ['./painel-adm.css'],
})

export class PainelAdm {
  users: Pessoas[] = [
    { nome: 'João', id: 1 },
    { nome: 'Maria', id: 2 },
    { nome: 'Pedro', id: 3 },
    { nome: 'Ana', id: 4 },
    { nome: 'Carlos', id: 5 },
  ];
}
