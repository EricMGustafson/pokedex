import { ProxyState } from "../AppState.js";
import { myPokeService } from "../Services/MyPokeService.js";

function _drawPokeTeam(){
  let template = ''
  ProxyState.pokeTeam.forEach(p => template += p.teamTemplate)
  document.getElementById('selected').innerHTML = template
}

export class MyPokeController{
  constructor() {
    this.getPokeTeam()
    ProxyState.on('pokeTeam', _drawPokeTeam)
  }

  async getPokeTeam(){
    try {
      await myPokeService.getPokeTeam()
    } catch (error) {
      console.log('POKEteam GET ERROR', error)
    }
  }
  async activeMyPokemon(id){
    try {
      await myPokeService.activeMyPokemon(id)
    } catch (error) {
      console.log('POKEteam GET ERROR', error)
    }
  }



  async removePokemon(id){
    try {
      await myPokeService.removePokemon(id)
    } catch (error) {
      console.log('POKE DELETE ERROR', error)
    }
  }


}