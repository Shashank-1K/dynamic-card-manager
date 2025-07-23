import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { Card } from './card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:3000/cards';
  private cardsSubject = new BehaviorSubject<Card[]>([]);
  public cards$: Observable<Card[]> = this.cardsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getCards().subscribe();
  }

  // GET: Fetch all cards from the server
  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl).pipe(
      tap(cards => this.cardsSubject.next(cards)),
      catchError(this.handleError)
    );
  }

  // PUT: Update a card with new data (title and description)
  updateCard(cardId: number, updatedData: { title: string; description: string }): void {
    const cardToUpdate = this.cardsSubject.getValue().find(c => c.id === cardId);
    if (!cardToUpdate) return;

    // Create the fully updated card object
    const updatedCard = { ...cardToUpdate, ...updatedData };

    this.http.put<Card>(`${this.apiUrl}/${cardId}`, updatedCard).pipe(
      switchMap(() => this.getCards()),
      catchError(this.handleError)
    ).subscribe();
  }

  // POST: Add a new card (let the server create the ID)
  addCard(): void {
    const newCardData: Omit<Card, 'id'> = {
      title: 'New Card',
      description: 'Edit this description!'
    };

    this.http.post<Card>(this.apiUrl, newCardData).pipe(
      switchMap(() => this.getCards()),
      catchError(this.handleError)
    ).subscribe();
  }

  // DELETE: Remove a card from the server
  deleteCard(cardId: number): void {
    this.http.delete<void>(`${this.apiUrl}/${cardId}`).pipe(
      switchMap(() => this.getCards()),
      catchError(this.handleError)
    ).subscribe();
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(() => new Error('An error occurred. Check the server logs and network requests.'));
  }
}
