
import { Component, signal } from '@angular/core';
import { Aula3 } from './aula3/aula3';

@Component({
  selector: 'app-root',
  imports: [Aula3],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('minha-aplicacao-angular');
}