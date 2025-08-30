import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { League } from '../models/league.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5119/leagues';

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(this.apiUrl);
  }

  addLeague(league: { name: string }): Observable<League> {
    return this.http.post<League>(this.apiUrl, league);
  }

  deleteLeague(leagueId: number): Observable<League> {
    return this.http.delete<League>(this.apiUrl + `/${leagueId}`);
  }
}
