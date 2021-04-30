import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeDetail, Pokemon, pokeServiceRes } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {
  id: string;
  pokemon = '';
  searchPokeName: string="";
  listPokemon:Pokemon[]=[];
  pokeDetail:PokeDetail;
  constructor(private pokeService : PokeAPIServiceService,
    private pokeShareInfoService: PokeShareInfoService) { }
  
  ngOnInit(): void {
    //this.listPokemon.push(new Pokemon('pikachu',25));
    //this.listPokemon.push(new Pokemon('bulbizarre',1));
    //this.listPokemon.push(new Pokemon('salameche',4));
    this.pokeService.getPokemon().subscribe( (data)=> {
      data.results.forEach( (e, index) => {
        this.listPokemon.push(new Pokemon('' + index, e.name));
      } );
    } );
  }
  go(){
    this.pokeShareInfoService.setValue(this.id)
    if (this.pokemon != ''){
      this.pokeService.getPokemonInfo(this.pokemon).subscribe(data => this.pokeDetail = data);
    }
    
  }

}
