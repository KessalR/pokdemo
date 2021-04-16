import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  pokemon = '';
  searchPokeName: string="";
  listPokemon:Pokemon[]=[];
  constructor() { }
  
  ngOnInit(): void {
    this.listPokemon.push(new Pokemon('pikachu',25));
    this.listPokemon.push(new Pokemon('bulbizarre',1));
    this.listPokemon.push(new Pokemon('salameche',4));
  }
  go(){
    console.log(this.pokemon);
  }

}
