// TODO: write your code here
import sum from './basic';

console.log('app worked');

console.log(sum([1, 2]));

import Game, {GameSavingData as saveGame ,writeGameSaving as loadGame} from './game.js';

const game = new Game();
game.start();
