import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(1024, 800, Phaser.AUTO, 'content', null);

		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}
new Game();
