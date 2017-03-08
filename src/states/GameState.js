import Miner from '../objects/entities/miner';
import Blacksmith from '../objects/entities/blacksmith';
import {positions, MaterialStorage, ToolsDeposit} from '../data/data';

class GameState extends Phaser.State {

  preload () {
    //load images
    this.game.load.image('miner', 'assets/miner.png');
    this.game.load.image('blacksmith', 'assets/blacksmith.png');

    this.game.load.image('grass', 'assets/grass5.png');
    this.game.load.image('ore', 'assets/ore2.png');
    this.game.load.image('tool_deposit', 'assets/tool_deposit2.png');
    this.game.load.image('material_depot', 'assets/material_depot2.png');
    this.game.load.image('forge', 'assets/forge.png');

    //load tilemap
    this.game.load.image('tilesetimage', 'browserquest/tilesheet.png');
    this.game.load.tilemap('tilemap', 'levels/level1.json', null, Phaser.Tilemap.TILED_JSON);

  }

  create () {
    //bound to world
    this.game.world.setBounds(0, 0, 1024, 800);

    // scaling
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;

    // for(var i = 0; i < 20; i++) {
    //   for(var j = 0; j < 15; j++) {
    //     this.game.add.sprite(i * 63, j * 64, 'grass');
    //   }
    // }

    // this.game.add.sprite(positions.ore.x, positions.ore.y, 'ore');
    // this.game.add.sprite(positions.tool_deposit.x, positions.tool_deposit.y, 'tool_deposit');
    // this.game.add.sprite(positions.material_depot.x, positions.material_depot.y, 'material_depot');
    // this.game.add.sprite(positions.forge.x, positions.forge.y, 'forge');

    // this.miner = new Miner(this.game, positions.miner_spawn);
    // this.blacksmith = new Blacksmith(this.game, positions.blacksmith_spawn);

    // this.oreText = this.game.add.text(5, 5, 'Ore: ' + MaterialStorage.Ore, {
    //   font: '14pt Helvetica',
    //   fill: 'white'
    // });

    // this.pickAxeText = this.game.add.text(5, 25, 'Pick Axes: ' + ToolsDeposit.PickAxe, {
    //   font: '14pt Helvetica',
    //   fill: 'white'
    // });

    //add map
    this.map = this.game.add.tilemap('tilemap');
    this.map.addTilesetImage('tilesheet', 'tilesetimage', 16, 16);

    this.sand_object = this.map.createLayer('sand objects');
    this.sand_object.resizeWorld();
    this.ground = this.map.createLayer('ground');
    this.ground.resizeWorld();
    this.groundvariations = this.map.createLayer('groundvariations');
    this.groundvariations.resizeWorld();
    this.mud = this.map.createLayer('mud');
    this.mud.resizeWorld();
    this.grass = this.map.createLayer('grass');
    this.grass.resizeWorld();
    this.stone = this.map.createLayer('stone');
    this.stone.resizeWorld();
    this.water = this.map.createLayer('water');
    this.water.resizeWorld();
    this.grassvariations = this.map.createLayer('grassvariations');
    this.grassvariations.resizeWorld();
    this.lakes = this.map.createLayer('lakes');
    this.lakes.resizeWorld();
    this.village_boundarie = this.map.createLayer('village boundaries');
    this.village_boundarie.resizeWorld();
    this.village_boundaries_l = this.map.createLayer('village boundaries lvl 2');
    this.village_boundaries_l.resizeWorld();
    this.river = this.map.createLayer('river');
    this.river.resizeWorld();
    this.Houses_layer = this.map.createLayer('Houses layer 2');
    this.Houses_layer.resizeWorld();
    this.Houses = this.map.createLayer('Houses');
    this.Houses.resizeWorld();
    this.dryground = this.map.createLayer('dryground');
    this.dryground.resizeWorld();
    this.dryground2 = this.map.createLayer('dryground2');
    this.dryground2.resizeWorld();
    this.Big_Rock = this.map.createLayer('Big Rocks');
    this.Big_Rock.resizeWorld();
    this.graveyard_mu = this.map.createLayer('graveyard mud');
    this.graveyard_mu.resizeWorld();
    this.dead_gras = this.map.createLayer('dead grass');
    this.dead_gras.resizeWorld();
    this.dead_leave = this.map.createLayer('dead leaves');
    this.dead_leave.resizeWorld();
    this.small_rock = this.map.createLayer('small rocks');
    this.small_rock.resizeWorld();
    this.graveyard = this.map.createLayer('graveyard');
    this.graveyard.resizeWorld();
    this.dead_tree = this.map.createLayer('dead trees');
    this.dead_tree.resizeWorld();
    this.camps = this.map.createLayer('camps');
    this.camps.resizeWorld();
    this.bones = this.map.createLayer('bones');
    this.bones.resizeWorld();
    this.lava = this.map.createLayer('lava');
    this.lava.resizeWorld();
    this.canyon = this.map.createLayer('canyon');
    this.canyon.resizeWorld();
    this.Cliffs = this.map.createLayer('Cliffs');
    this.Cliffs.resizeWorld();
    this.Cliffs  = this.map.createLayer('Cliffs 2');
    this.Cliffs .resizeWorld();
    this.totems = this.map.createLayer('totems');
    this.totems.resizeWorld();
    this.cactus = this.map.createLayer('cactus');
    this.cactus.resizeWorld();
    this.lavafalls = this.map.createLayer('lavafalls');
    this.lavafalls.resizeWorld();
    this.lava_boundarie = this.map.createLayer('lava boundaries');
    this.lava_boundarie.resizeWorld();
    this.cave = this.map.createLayer('cave');
    this.cave.resizeWorld();
    this.Trees2 = this.map.createLayer('Trees2');
    this.Trees2.resizeWorld();
    this.caveriver = this.map.createLayer('caveriver');
    this.caveriver.resizeWorld();
    this.cavewalls = this.map.createLayer('cavewalls');
    this.cavewalls.resizeWorld();
    this.indoor = this.map.createLayer('indoor');
    this.indoor.resizeWorld();
    this.indoorwalls = this.map.createLayer('indoorwalls');
    this.indoorwalls.resizeWorld();
    this.indoor_door = this.map.createLayer('indoor doors');
    this.indoor_door.resizeWorld();
    this.carpets = this.map.createLayer('carpets');
    this.carpets.resizeWorld();
    this.indoor_object = this.map.createLayer('indoor objects');
    this.indoor_object.resizeWorld();
    this.easter_egg = this.map.createLayer('easter eggs');
    this.easter_egg.resizeWorld();
    this.forest_path = this.map.createLayer('forest paths');
    this.forest_path.resizeWorld();
    this.forest = this.map.createLayer('forest');
    this.forest.resizeWorld();
    this.forest_lake = this.map.createLayer('forest lakes');
    this.forest_lake.resizeWorld();
    this.forest_boundarie = this.map.createLayer('forest boundaries');
    this.forest_boundarie.resizeWorld();
    this.forest_tree = this.map.createLayer('forest trees');
    this.forest_tree.resizeWorld();
    this.bridges_shadow = this.map.createLayer('bridges shadows');
    this.bridges_shadow.resizeWorld();
    this.Bridge = this.map.createLayer('Bridge');
    this.Bridge.resizeWorld();
    this.forest_objects = this.map.createLayer('forest objects 1');
    this.forest_objects.resizeWorld();
    this.forest_objects = this.map.createLayer('forest objects 2');
    this.forest_objects.resizeWorld();
    this.mase = this.map.createLayer('mase');
    this.mase.resizeWorld();
    this.mase_wall = this.map.createLayer('mase walls');
    this.mase_wall.resizeWorld();
    this.sea = this.map.createLayer('sea');
    this.sea.resizeWorld();
    this.minerals = this.map.createLayer('minerals');
    this.minerals.resizeWorld();



    // this.trees = this.map.createLayer('Trees');
    // this.trees.resizeWorld();

    // this.roads = this.map.createLayer('roads');
    // this.roads.resizeWorld();

    window.game = this;
  }

  update () {
    // this.miner.update();
    // this.blacksmith.update();

    // this.oreText.setText('Ore: ' + MaterialStorage.Ore);
    // this.pickAxeText.setText('Pick Axes: ' + ToolsDeposit.PickAxe);
  }

}

export default GameState;
