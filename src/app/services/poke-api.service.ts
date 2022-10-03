import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  baseURL = "https://pokeapi.co/api/v2/"
  searchBaseURL = "https://dabliuweb.com.br/pokemon/index.php"

  constructor(
    private http: HttpClient
  ) {}

  async listPokemons(pagination?){
    if(pagination){
      return this.http.get(pagination).toPromise();
    }else{
      return this.http.get(this.baseURL+'pokemon').toPromise();
    }
  }

  async getDetails(pokemon){
    return this.http.get(pokemon.url).toPromise();
  }

  async FindPokemon(string){
    return this.http.get(this.searchBaseURL + '?search=' + string).toPromise();
  }

}
