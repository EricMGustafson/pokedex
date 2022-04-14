export class Pokemon{
  constructor(data){
    this.id = data.id || ''
    this.name = data.name
    this.nickName = data.nickName || 'N/A'
    this.img = data.img || data.sprites['other']['official-artwork']['front_default'] 
    this.weight = data.weight
    this.height = data.height
    this.types = data.types || data.types[0].type.name
  }

  get Template() {
    return `
    <div class="d-flex justify-content-between">
      <div class="text-light ">
        <h3>Name: ${this.name}</h3>
        <h3>Nickname: ${this.nickName}</h3>
        <h3>Weight: ${this.weight}</h3>
        <h3>Height: ${this.height}</h3>
        <h3>Types: ${this.types}</h3>
        <div>${this.Button}</div>
      </div>
      <div>
        <img class="object-fit pb-2" src="${this.img}" alt="">
      </div>
    </div>`
  }

  get Button() {
    if (!this.id) {
      return `<button class="btn btn-info" onclick="app.pokeController.addPokemon('${this.name}')">Add Pokemon</button>`
      } else { return `<button class="btn btn-info" onclick="app.myPokeController.removePokemon('${this.id}')">Remove Pokemon</button>`}
    }

  get teamTemplate() {
    return `
    <div class="d-flex justify-content-between shadow rounded team m-1 bg-secondary selectable" onclick="app.myPokeController.activeMyPokemon('${this.id}')">
      <div>
        <h2>${this.name}</h2>
      </div>
      <div>
        <img class="object-fit-small" src="${this.img}" alt="">
      </div>
    </div>`
  }
}