import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ordem } from './ordem.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  //baseUrl = 'http://localhost:8080/ordemtrafego'
  private baseUrl = 'https://gestao-de-frotas-backend.herokuapp.com/ordemtrafego'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // interage com o backend
  create(ordem: Ordem): Observable<Ordem> {
    return this.http.post<Ordem>(this.baseUrl, ordem)
  }

  read(): Observable<Ordem[]> {
    const opts = { params: new HttpParams({ fromString: `pageNumber=${0}&pageSize=${20}`}) }
    return this.http.get<Ordem[]>(this.baseUrl, opts)
  }

  readById(id: string): Observable<Ordem> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Ordem>(url)
  }

  update(ordem: Ordem): Observable<Ordem> {
    return this.http.put<Ordem>(this.baseUrl, ordem)
  }

  delete(id: number): Observable<Ordem> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Ordem>(url);
  }

}
