import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon;

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
    console.log(this.pokemon, 'pokemon')
  }

  dismiss(){
    this.modal.dismiss();
  }

}
