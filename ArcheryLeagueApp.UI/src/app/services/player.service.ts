import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5119/players';

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }

  addPlayer(player: { firstName: string; lastName: string }): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player);
  }
}
