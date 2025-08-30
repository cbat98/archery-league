import { Routes } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { LeaguesComponent } from './components/leagues/leagues.component';

export const routes: Routes = [
  { path: 'leagues', component: LeaguesComponent },
  { path: 'players', component: PlayersComponent },
];
