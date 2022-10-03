import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonDetailComponent } from '../general/modal/pokemon-detail/pokemon-detail.component';
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
    private pokeAPI: PokeAPIService,
    private modal: ModalController
  ) {
    this.getAllPokemons()
  }


  async getAllPokemons(){
    this.pokemons = await this.pokeAPI.listPokemons({offset: 0, limit: 30})
    console.log(this.pokemons)
  }


  async PokemonDetails(pokemon){
    console.log(pokemon)
    let modals = await this.modal.create({
      component: PokemonDetailComponent,
      componentProps: {pokemon: pokemon}
    })

    await modals.present()

  }

  

}
