import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './planos.component.html',
  styleUrl: './planos.component.scss'
})
export class PlanosComponent {
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
