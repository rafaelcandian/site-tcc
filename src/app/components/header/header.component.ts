import { NgOptimizedImage } from '@angular/common';
import { Component , AfterViewInit, HostListener, Renderer2} from '@angular/core';
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

  constructor(private renderer: Renderer2, public globalService: GlobalService) {}


  // Acessar o valor da variável global
  getLanguage(): string {
    return this.globalService.getLanguage();
  }

  // Atualizar o valor da variável global
  setLanguage(newValue: string): void {
    this.globalService.setLanguage(newValue);
  }

  ngAfterViewInit(): void {
    this.checkPosition();
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkPosition();
    this.scrollPosition = window.scrollY || document.documentElement.scrollTop;

  }

  checkPosition(): void {
    const checkbox = this.renderer.selectRootElement('#menu', true);
    const rect = checkbox.getBoundingClientRect();
    console.log(this.scrollPosition)

    if (this.scrollPosition <= 1.1) {
      this.isChecked = true;

    }
    else if(this.scrollPosition >= 300){
      this.isChecked = false;
    }
  }
}
