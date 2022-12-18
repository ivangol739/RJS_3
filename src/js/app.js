import Logick from "./Logick";
import createField from "./createField";

createField();
const game = new Logick();
game.interval();
game.damage();
