import { ProxyState } from "../AppState.js"
import { sandboxApi } from "../Controllers/AxiosController.js"
import { Pokemon } from "../Models/Pokemon.js"


class MyPokeService {
  activeMyPokemon(id) {
    let active = ProxyState.pokeTeam.find(p => p.id == id)
    ProxyState.activePokemon = active
  }
  async getPokeTeam() {
    let rep = await sandboxApi.get('pokemon')
    ProxyState.pokeTeam = rep.data.map(p => new Pokemon(p))
  }

  async addPokemon(name) {
    const res = await sandboxApi.post('Pokemon/', ProxyState.activePokemon)
    ProxyState.pokeTeam = [...ProxyState.pokeTeam, new Pokemon(res.data)]
    console.log(ProxyState.pokeTeam);

  }
}
export const myPokeService = new MyPokeService()