import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  // Aqui está sua variável global
  public language: string = 'pt';

  constructor() { }

  // Método para atualizar a variável global
  setLanguage(value: string): void {
    this.language = value;
  }

  // Método para obter o valor da variável global
  getLanguage(): string {
    return this.language;
  }
}
