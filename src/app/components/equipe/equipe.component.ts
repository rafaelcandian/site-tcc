import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

interface Employee {
  name: string;
  role: string;
  photo: string;
}

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [NgFor, NgClass, NgOptimizedImage, FontAwesomeModule],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent {
  fainsta=faInstagram;
  falink=faLinkedin;
}
