import { Component, OnInit, ViewChild, ElementRef, inject, signal } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit {
  @ViewChild('firstName') firstNameInput!: ElementRef;

  private playerService = inject(PlayerService);

  public players = signal<Player[]>([]);
  public newPlayer = { firstName: '', lastName: '' };

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.playerService.getPlayers().subscribe(data => {
      this.players.set(data);
    });
  }

  onSubmit(): void {
    if (!this.newPlayer.firstName.trim()) {
      return;
    }
    if (!this.newPlayer.lastName.trim()) {
      return;
    }

    this.playerService.addPlayer(this.newPlayer).subscribe(createdPlayer => {
      this.players.update(currentPlayers => [...currentPlayers, createdPlayer]);
      this.newPlayer = { firstName: '', lastName: '' };
      this.firstNameInput.nativeElement.focus();
    });
  }

  deletePlayer(playerId: number): void {
    this.playerService.deletePlayer(playerId).subscribe(() => {
      this.loadPlayers();
    });
  }
}
