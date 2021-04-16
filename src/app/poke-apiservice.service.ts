import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokeServiceRes } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  constructor( private http: HttpClient ) {}

  getPokemon(): Observable<pokeServiceRes> {
    return this.http.get<pokeServiceRes>('https://pokeapi.co/api/v2/pokemon/');
    
  }
}
