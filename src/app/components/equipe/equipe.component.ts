import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

import { GlobalService } from '../../global.service';
import { NgIf } from '@angular/common';


interface Employee {
  name: string;
  role: string;
  photo: string;
}

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [NgFor, NgClass, NgOptimizedImage, FontAwesomeModule, NgIf],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent {
  fainsta=faInstagram;
  falink=faLinkedin;
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
