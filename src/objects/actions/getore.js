import Action from '../ai/action';
import {positions, MaterialStorage} from '../../data/data';

export default class GetOreAction extends Action {
    constructor(){
    	super("GetOre", 1);
		this._position = positions.material_depot;

    	this.addEffect("HasOre", true);
    }

    canExecute() {
    	return MaterialStorage.Ore > 0;
	}

	execute() {
	    MaterialStorage.Ore--;
	}

}

