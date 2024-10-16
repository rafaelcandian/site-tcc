import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

import { GlobalService } from '../../global.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {
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
