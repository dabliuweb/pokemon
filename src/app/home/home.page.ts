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
  pokemons: pokemon[] = []
  searchPokemon = null
  page = 1;
  limit = 20;
  
  constructor(
    private pokeAPI: PokeAPIService,
    private modal: ModalController
  ) {
    this.getAllPokemons(false)
  }

  async getAllPokemons(isInfinite, next?, event?){

    this.pokeAPI.listPokemons(next != undefined ? next : undefined).then(
      (data:any)=>{
        data.results.forEach(element => {
          this.pokeAPI.getDetails(element).then(
            (datas:any)=>{
              element = {...element, ...datas}
              this.pokemons.push(element)
            }
          );
        });
      }
    )
    if(isInfinite)
    {
      event.target.complete();
      this.page++;

    }
  }

  async PokemonDetails(pokemon){
    console.log(pokemon)
    let modals = await this.modal.create({
      component: PokemonDetailComponent,
      componentProps: {pokemon: pokemon}
    })

    await modals.present()

  }

  doInfinite(event) {
    console.log(event)
    let next = "https://pokeapi.co/api/v2/pokemon?limit="+this.limit+"&offset="+this.page*this.limit
    this.getAllPokemons(true, next, event);
  }

  handleChange(event){
    let value = event.detail.value;

    if(value.length > 3){
      this.pokeAPI.FindPokemon(value).then(
        (data:any)=>{
          this.searchPokemon = data;
        }
      )
    }
  }

  cancelSearch(){
    this.searchPokemon = null;
  }

}
