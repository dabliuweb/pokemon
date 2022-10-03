import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemon } from '../models/pokemon';

export interface pagination {
offset?: number;
limit?: number;
}

export interface returnedPoke{
  count: number;
  next: string | null;
  previous: string | null;
  results: pokemon[];
}


@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  baseURL = "https://pokeapi.co/api/v2/"

  constructor(
    private http: HttpClient
  ) {}

  listPokemons(pagination?: pagination): pokemon[]{

    let obj = []
    this.http.get(this.baseURL + 'pokemon').toPromise().then(
      (data: returnedPoke)=>{
        data.results.forEach( pokemon => {
          this.getDetails(pokemon).then(
            (data:pokemon)=>{
              pokemon = { ...pokemon, ...data}
              obj.push(pokemon)
            }
          );
        });        
      }
    );
    return obj;
  }

  getDetails(pokemon){
    return this.http.get(pokemon.url).toPromise();
  }

}
