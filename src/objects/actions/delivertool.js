import Action from '../ai/action';
import {positions, MaterialStorage} from '../../data/data';

export default class DeliverToolAction extends Action {
    constructor(){
    	super("DeliverTool", 1);
		this._position = positions.tool_deposit;

	    this.addPrecondition("HasTool", true);
	    this.addEffect("HasTool", false);
    }

    execute() {
	    MaterialStorage.PickAxe++
	}

}

