import { Component, OnInit } from '@angular/core'; // <-- Fixes the main error
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Card } from '../card.interface';
import { CardService } from '../card.service';
import { EditCardDialogComponent } from '../edit-card-dialog/edit-card-dialog.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [ // These are required for the template to work
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards$!: Observable<Card[]>;

  constructor(
    private cardService: CardService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cards$ = this.cardService.cards$;
  }

  openEditDialog(card: Card): void {
    const dialogRef = this.dialog.open(EditCardDialogComponent, {
      width: '400px',
      data: card,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cardService.updateCard(card.id, result);
      }
    });
  }

  addNewCard(): void {
    this.cardService.addCard();
  }

  deleteCard(cardId: number): void {
    this.cardService.deleteCard(cardId);
  }
}