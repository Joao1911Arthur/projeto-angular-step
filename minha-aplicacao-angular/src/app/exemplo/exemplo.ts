import { Component } from '@angular/core';

@Component({
  selector: 'exemplo',
  imports: [],
  templateUrl: './exemplo.html',
  styleUrl: './exemplo.css',
})
export class Exemplo {

  nome = "Joao";

  mudarNome() {
    this.nome = "Brabo";
  }

}
