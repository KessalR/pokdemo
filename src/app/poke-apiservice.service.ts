import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeDetail, pokeServiceRes } from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})

export class PokeAPIServiceService {
  constructor( private http: HttpClient ) {}

  getPokemon(): Observable<pokeServiceRes> {
    return this.http.get<pokeServiceRes>(url);
    
  }
  getPokemonInfo(id:string): Observable<PokeDetail> {
    console.log(id);
    return this.http.get<PokeDetail>(url + id + '/');
    
  }
}
