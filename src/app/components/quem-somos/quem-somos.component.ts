import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { GlobalService } from '../../global.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-quem-somos',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './quem-somos.component.html',
  styleUrl: './quem-somos.component.scss'
})

export class QuemSomosComponent {
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
