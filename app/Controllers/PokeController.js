import { pokeService } from "../Services/PokeService.js";
import { ProxyState } from "../AppState.js"
import { myPokeService } from "../Services/MyPokeService.js";

async function _drawPokedex(){
  let template = ''
  ProxyState.pokedex.forEach(p => template += `<li class="selectable" onclick="app.pokeController.activePokemon('${p.name}')">${p.name}</li>`)
  document.getElementById('pokedex').innerHTML = template
}

async function _drawActivePokemon(){
  document.getElementById('active').innerHTML = ProxyState.activePokemon.Template
}


export class PokeController {
  constructor() {
    ProxyState.on('pokedex', _drawPokedex)
    ProxyState.on('activePokemon', _drawActivePokemon)
    this.getPokedex()
  }
  async getPokedex(){
    try {
      await pokeService.getPokedex()
    } catch (error) {
      console.log('POKE GET ERROR', error)
    }
  }

  async addPokemon(name){
    try {
      await myPokeService.addPokemon(name)
      } catch (error) {
      console.log('POKE ADD ERROR', error)
    }
  }

  activePokemon(pokeName){
    pokeService.activePokemon(pokeName)
  }
}
