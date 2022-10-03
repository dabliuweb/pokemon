import { Component } from '@angular/core';
import { pokemon } from '../models/pokemon';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemons: pokemon[]
  constructor(
    private pokeAPI: PokeAPIService
  ) {
    this.getAllPokemons()
  }


  async getAllPokemons(){
    this.pokemons = await this.pokeAPI.listPokemons({offset: 0, limit: 30})
    console.log(this.pokemons)
  }

  

}
