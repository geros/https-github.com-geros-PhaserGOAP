import Miner from '../objects/entities/miner';
import Blacksmith from '../objects/entities/blacksmith';
import {positions, MaterialStorage, ToolsDeposit} from '../data/data';

class GameState extends Phaser.State {

	preload() {
	    this.game.load.image("miner", "assets/miner.png");
	    this.game.load.image("blacksmith", "assets/blacksmith.png");

	    this.game.load.image("grass", "assets/grass5.png");
	    this.game.load.image("ore", "assets/ore2.png");
	    this.game.load.image("tool_deposit", "assets/tool_deposit2.png");
	    this.game.load.image("material_depot", "assets/material_depot2.png");
	    this.game.load.image("forge", "assets/forge.png");
	}

	create() {
	    for(var i = 0; i < 20; i++) {
	        for(var j = 0; j < 15; j++) {
	            this.game.add.sprite(i * 63, j * 64, "grass");
	        }
	    }

	    this.game.add.sprite(positions.ore.x, positions.ore.y, "ore");
	    this.game.add.sprite(positions.tool_deposit.x, positions.tool_deposit.y, "tool_deposit");
	    this.game.add.sprite(positions.material_depot.x, positions.material_depot.y, "material_depot");
	    this.game.add.sprite(positions.forge.x, positions.forge.y, "forge");

	    this.miner = new Miner(this.game, positions.miner_spawn);
	    // this.miner1 = new Miner(this.game, {x: 200, y: 200});
	    // this.blacksmith = new Blacksmith(this.game, positions.blacksmith_spawn);
	    // this.blacksmith1 = new Blacksmith(this.game, {x: 200, y: 200});
	    // this.blacksmith2 = new Blacksmith(this.game, {x: 0, y: 0});
	    this.oreText = this.game.add.text(5, 5, "Ore: " + MaterialStorage.Ore, {
	        font: "14pt Helvetica",
	        fill: "white"
	    });

	    this.pickAxeText = this.game.add.text(5, 25, "Pick Axes: " + ToolsDeposit.PickAxe, {
	        font: "14pt Helvetica",
	        fill: "white"
	    });
	}

	update() {
	    this.miner.update();
	    // this.miner1.update();
	    // this.blacksmith.update();
	    // this.blacksmith1.update();
	    // this.blacksmith2.update();

	    this.oreText.setText("Ore: " + MaterialStorage.Ore);
	    this.pickAxeText.setText("Pick Axes: " + ToolsDeposit.PickAxe);
	}

}

export default GameState;
