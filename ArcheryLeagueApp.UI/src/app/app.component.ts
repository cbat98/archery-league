import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { LeaguesComponent } from './components/leagues/leagues.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PlayersComponent,
    LeaguesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArcheryLeagueApp.UI';
}
