import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Condutor } from './condutor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CondutorService {

  //baseUrl = 'http://localhost:8080/condutores'
  baseUrl = 'https://gestao-de-frotas-backend.herokuapp.com/condutores'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // interage com o backend
  create(condutor: Condutor): Observable<Condutor> {
    return this.http.post<Condutor>(this.baseUrl, condutor)
  }

  read(): Observable<Condutor[]> {
    return this.http.get<Condutor[]>(this.baseUrl)
  }

  readById(id: string): Observable<Condutor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Condutor>(url)
  }

  update(condutor: Condutor): Observable<Condutor> {
    return this.http.put<Condutor>(this.baseUrl, condutor)
  }

  delete(id: number): Observable<Condutor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Condutor>(url);
  }

}
