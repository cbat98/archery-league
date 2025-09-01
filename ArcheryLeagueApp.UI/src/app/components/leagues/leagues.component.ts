import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { League } from '../../models/league.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leagues',
  imports: [FormsModule],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.css'
})
export class LeaguesComponent {
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('status') statusMessage!: ElementRef;

  private leagueService = inject(LeagueService);

  public leagues: League[] = [];
  public newLeague = { name: '' };

  ngOnInit(): void {
    this.loadLeagues();
  }

  loadLeagues(): void {
    this.leagueService.getLeagues().subscribe(data => {
      this.leagues = data;
    }, err => { this.setStatus("Unable to fetch leagues") });
  }

  onSubmit(): void {
    if (!this.newLeague.name.trim()) {
      return
    }

    this.leagueService.addLeague(this.newLeague).subscribe(createdLeague => {
      this.leagues.push(createdLeague);
      this.newLeague = { name: '' };
      this.nameInput.nativeElement.focus();
    }, err => { this.setStatus("Unable to add league") });
  }

  deleteLeague(leagueId: number): void {
    this.leagueService.deleteLeague(leagueId).subscribe(() => {
      this.loadLeagues();
    }, err => { this.setStatus("Unable to delete league") });
  }

  setStatus(message: string) {
    this.statusMessage.nativeElement.innerText = message;
  }
}
