import Action from '../ai/action';
import {positions, MaterialStorage} from '../../data/data';

export default class DeliverOreAction extends Action {
    constructor(){
    	super("DeliverOre", 1);
		this._position = positions.material_depot;

    	this.addPrecondition("HasOre", true);
    	this.addEffect("HasOre", false);
    	this.addEffect("HasTool", true);
    }

    execute() {
	    MaterialStorage.Ore++;
	}
}

