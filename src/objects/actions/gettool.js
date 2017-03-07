import Action from '../ai/action';
import PickAxe from '../../data/data'
import {positions, ToolsDeposit} from '../../data/data';

export default class GetToolAction extends Action {
    constructor(){
    	super("GetTool", 1);
		this._position = positions.tool_deposit;

	    this.addPrecondition("HasTool", false);
	    this.addEffect("HasTool", true);
    }

    canExecute() {
    	return ToolsDeposit.PickAxe > 0;
	}

	execute() {
	    ToolsDeposit.PickAxe--;
	}

}

