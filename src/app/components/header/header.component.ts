import { isPlatformBrowser } from '@angular/common'; // Importar aqui


import { NgOptimizedImage } from '@angular/common';
import { Component , AfterViewInit, HostListener, Renderer2, Inject, PLATFORM_ID} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { GlobalService } from '../../global.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements AfterViewInit{
  faTasks = faTasks;
  faIdCard = faIdCard;
  faPaperPlane = faPaperPlane;
  faLanguage = faLanguage;
  faShoppingCart = faShoppingCart

  isChecked = false;
  scrollPosition = 0;

  constructor(private renderer: Renderer2, public globalService: GlobalService,  @Inject(PLATFORM_ID) private platformId: Object) {}


  // Acessar o valor da variável global
  getLanguage(): string {
    return this.globalService.getLanguage();
  }

  // Atualizar o valor da variável global
  setLanguage(newValue: string): void {
    this.globalService.setLanguage(newValue);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkPosition(); // Executa apenas no navegador
    }
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkPosition();
      this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
    }
  }

  checkPosition(): void {
    if (isPlatformBrowser(this.platformId)) { // Garante que estamos no navegador
      const checkbox = this.renderer.selectRootElement('#menu', true);
      if (checkbox) {
        const rect = checkbox.getBoundingClientRect();
        console.log(this.scrollPosition);

        if (this.scrollPosition <= 1.1) {
          this.isChecked = true;
        } else if (this.scrollPosition >= 300) {
          this.isChecked = false;
        }
      }
    }
  }
}
