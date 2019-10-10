import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Boeken } from './boeken';

@Injectable({
  providedIn: 'root'
})
export class BoekenService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Boeken[]>  {
    return this.http.get<any>('http://localhost:8080/boeken')
  }


  save(boeken: Boeken): Observable<Boeken> {
    return this.http.post<Boeken>('http://localhost:8080/boeken', boeken)
  }

  delete(id) {
    return this.http.delete('http://localhost:8080/boeken/' + id)
  }


findByAuteur(auteur): Observable<Boeken[]>{
   return this.http.get<Boeken[]>('http://localhost:8080/boeken/auteurs/' + auteur)
}

findByTitel(titel): Observable<Boeken[]>{
  return this.http.get<Boeken[]>('http://localhost:8080/boeken/titels/' + titel)
}


findByBeoordeling(beoordeling): Observable<Boeken[]>{
  return this.http.get<Boeken[]>('http://localhost:8080/boeken/beoordelingen/' + beoordeling)
}




}