import { MyPokeController } from "./Controllers/MyPokeController.js";
import { PokeController } from "./Controllers/PokeController.js";


class App {
  pokeController = new PokeController()
  myPokeController = new MyPokeController()
}

window["app"] = new App();
