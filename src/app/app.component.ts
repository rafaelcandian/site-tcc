import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import {ServicosComponent} from "./components/servicos/servicos.component";
import {PlanosComponent} from "./components/planos/planos.component";
import { EquipeComponent } from './components/equipe/equipe.component';
import {ContatoComponent} from "./components/contato/contato.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    QuemSomosComponent,
    HeaderComponent,
    ServicosComponent,
    PlanosComponent,
    EquipeComponent,
    ContatoComponent,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page';
  faCoffee = faCoffee;
  faIdCard = faIdCard;
}
