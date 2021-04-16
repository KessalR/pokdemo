import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  pokemon = '';
  searchPokeName: string="";
  listPokemon:Pokemon[]=[];
  constructor(private pokeService : PokeAPIServiceService) { }
  
  ngOnInit(): void {
    //this.listPokemon.push(new Pokemon('pikachu',25));
    //this.listPokemon.push(new Pokemon('bulbizarre',1));
    //this.listPokemon.push(new Pokemon('salameche',4));
    this.pokeService.getPokemon().subscribe( (data)=> {
      data.results.forEach( (e, index) => {
        this.listPokemon.push(new Pokemon(e.name, index));
      } );
    } );
  }
  go(){
    console.log(this.pokemon);
  }

}
