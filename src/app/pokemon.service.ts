import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];


  constructor(private http: HttpClient) { 
    this.loadingPokemons();
  }
   async loadingPokemons(){
      const req = await this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();
      this.pokemons = req.results;
  }
}
