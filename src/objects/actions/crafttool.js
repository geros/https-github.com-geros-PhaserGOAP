import Action from '../ai/action';
import {positions} from '../../data/data';

export default class CraftToolAction extends Action {
    constructor(){
    	super("CraftTool", 4);
	    this._position = positions.forge;

	    this.addPrecondition("HasTool", false);
	    this.addPrecondition("HasOre", true);
	    this.addEffect("HasTool", true);
    }
    
};

