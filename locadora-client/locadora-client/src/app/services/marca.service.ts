import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../model/marca.model';

const url = 'http://localhost:8080/marca';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }

  consultar (): Observable<Marca[]> {
    return this.http.get<Marca[]>(url);
  }

  consultarPorId(id: number): Observable<Marca> {
    const urlLocal = `${url}/${id}`;
    return this.http.get<Marca>(urlLocal);
  }
  
  adicionar (Marca): Observable<Marca> {
    return this.http.post<Marca>(url, Marca, httpOptions);
  }
  
  alterar (id, Marca): Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal, Marca, httpOptions);
  }
  
  excluir (id): Observable<Marca> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Marca>(urlLocal, httpOptions);
  }

}
