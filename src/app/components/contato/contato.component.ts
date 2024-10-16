import { Component } from '@angular/core';

import { GlobalService } from '../../global.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  constructor(public globalService: GlobalService) {}

  // Acessar o valor da variável global
  getLanguage(): string {
    return this.globalService.getLanguage();
  }

  // Atualizar o valor da variável global
  setLanguage(newValue: string): void {
    this.globalService.setLanguage(newValue);
  }
}
