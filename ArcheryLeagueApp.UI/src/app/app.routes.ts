import { Routes } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/leagues', pathMatch: 'full' },
  { path: 'leagues', component: LeaguesComponent },
  { path: 'players', component: PlayersComponent },
  { path: '**', component: PageNotFoundComponent },
];
