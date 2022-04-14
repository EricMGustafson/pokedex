import { ProxyState } from "../AppState.js";
import { pokeApi } from "../Controllers/AxiosController.js"
import { Pokemon } from "../Models/Pokemon.js";


class PokeService{
  async getPokedex() {
    const res = await pokeApi.get('pokemon?limit=151')
    ProxyState.pokedex = res.data.results
  }

  async activePokemon(pokeName){
    const res = await pokeApi.get('pokemon/' + pokeName)
    ProxyState.activePokemon = new Pokemon(res.data)
    

  }
}

export const pokeService = new PokeService()